import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <>
      <div
        onClick={() => onVideoSelect(video)}
        className="video-item item flex flex-row justify-start items-start py-5"
      >
        <img
          className="image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="content ml-4">
          <h3 className="header mt-2 mb-4 text-[15.5px] font-medium tracking-wider">
            {video.snippet.title}
          </h3>
        </div>
      </div>
      <hr className="border-black  mx-auto" />
    </>
  );
};

export default VideoItem;
