import React from "react";
import Skeleton from "react-loading-skeleton";
import CardItem from "./CardItem";
const Card = ({ item, loading }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4  mt-2 mb-2">
      {loading && <Skeleton width={"100%"} height={200} />}
      {!loading && <CardItem item={item} />}
    </div>
  );
};

export default Card;
