import React from "react";
import Card from "../components/Card";
import { useAPI } from "../components/hooks";

const Home = () => {
  const [data, error] = useAPI("https://ghibliapi.herokuapp.com/films");
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h1 className="text-center mt-4">Filmes</h1>
      <div className="row align-items-stretch">
        {!!data &&
          data.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        {!!!data &&
          [1, 2, 3, 4].map((item, index) => {
            return <Card key={index} item={item} loading={true} />;
          })}
      </div>
    </div>
  );
};

export default Home;
