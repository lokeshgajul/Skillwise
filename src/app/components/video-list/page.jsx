import React from "react";
import VideoItem from "../video-item/page";

const VideoList = ({ onVideoSelect, videos }) => {
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="video-previews-list">{renderList}</div>;
};

export default VideoList;
