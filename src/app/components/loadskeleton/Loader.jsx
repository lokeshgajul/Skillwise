import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loader = () => {
  return (
    <div style={{ display: "flex" }}>
      <Skeleton height={"20vh"} width={"30vw"} className="skeleton" />
    </div>
  );
};

export default Loader;
