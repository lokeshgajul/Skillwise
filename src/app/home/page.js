import React, { useEffect, useState } from "react";
import RoadmapForm from "../components/generate-roadmap/page";
import PrevRoadmaps from "../prev-roadmap/page";
import Loader from "../components/loadskeleton/Loader";

const Home = () => {
  return (
    <>
      <div>
        <div className="">
          <RoadmapForm />
        </div>
        <div className="pb-5">
          <PrevRoadmaps />
        </div>
      </div>
    </>
  );
};

export default Home;
