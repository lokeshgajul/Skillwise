"use client";

import React, { useEffect, useState } from "react";
import youtube from "../lib/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          type: "video",
          key: process.env.youtube_apiKey,
        },
      });

      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  return [videos, search];
};

export default useVideos;
