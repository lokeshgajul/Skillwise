"use client";
import React, { useState, useEffect } from "react";
import useVideos from "../hooks/useVideos";
import VideoList from "../components/video-list/page";
import VideoDetail from "../components/video-detail/page";

const page = () => {
  const [term, setTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("react js custom hooks");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("search term ", term);

    search(term);
  };

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="search-bar p-5">
      <div className="logo-container">
        <h1>Video Tutorials for {term} </h1>
      </div>
      <form onSubmit={onSubmit} className="form mt-4 w-1/2">
        <div className="field flex flex-row justify-between items-center border-2 border-gray-600 p-3 rounded-full shadow-current shadow-sm ">
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            className="px-2 w-full p-1 bg-transparent rounded-md  mr-2 focus:outline-none placeholder:text-gray-600"
            placeholder="Search..."
          />
          <label className="cursor-pointer pr-2">Search</label>
        </div>
      </form>

      <div className="flex justify-center items-center md:flex-row">
        <div className="p-3 grid grid-cols-7 gap-5">
          <div className="mt-4 col-span-4">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="col-span-3">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
