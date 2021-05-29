import React from "react";
import axios from "axios";
export function useAPI(url) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((ex) => {
        setError(ex.message);
      });
  }, [url]);
  return [data, error];
}
