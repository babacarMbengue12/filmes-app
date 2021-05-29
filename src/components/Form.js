import React from "react";
import * as yup from "yup";

export function FormError({ error }) {
  return (
    <div style={{ marginVertical: 5 }}>
      <small style={{ color: "#A00" }}>{error}</small>
    </div>
  );
}

export function AppButton({ onPress, title, className, ...props }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onPress();
      }}
      className={`btn ${className}`}
      {...props}
    >
      {title}
    </button>
  );
}
export function Input({ error, onChange, value, label, name, type = "text" }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="form-control"
        id={name}
        name={name}
        placeholder={label}
      />
      {!!error && <FormError error={error} />}
    </div>
  );
}
export const useFormData = (formData) => {
  const [data, setData] = React.useState(formData);
  const onDataChange = React.useCallback(
    (fieldName, value) => {
      if (typeof fieldName === "object") {
        setData({ ...data, ...fieldName });
        return;
      }
      if (fieldName === null) {
        setData(value);
        return;
      }
      let keys = Object.keys(data);
      if (keys.includes(fieldName)) {
        let newdata = { ...data };
        newdata[fieldName] = value;
        setData(newdata);
      } else {
        throw new Error(fieldName + " is not a valid key");
      }
    },
    [data, setData]
  );
  return [data, onDataChange];
};

export const useFormValidation = (initalErrors, cbRules) => {
  const [errors, setErrors] = React.useState(initalErrors);
  const Schema = yup.object().shape(cbRules(yup));
  const validate = React.useCallback(
    (data) => {
      return new Promise((resolve, reject) => {
        Schema.validate(data, { abortEarly: false })
          .then(() => {
            setErrors({});
            resolve(data);
          })
          .catch(function (err) {
            let newErrors = {};
            for (let e of err.inner) {
              newErrors[e.path] = e.errors[0];
            }
            setErrors(newErrors);
            reject(newErrors);
          });
      });
    },
    [Schema, setErrors]
  );
  return [errors, validate, setErrors];
};
