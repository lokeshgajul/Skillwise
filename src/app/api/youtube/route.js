import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { query } = await req.json();
    const apiKey = [process.env.youtube_apiKey];

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&key=${apiKey}&maxResults=5&type=video`;

    const res = await fetch(url);
    const data = await res.json();

    const videos = data.items?.map((item) => ({
      title: item.snippet.title,
      videoId: item.id.videoId,
      thumbnail: item.snippet.thumbnails.medium.url,
      channel: item.snippet.channelTitle,
      videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));

    return NextResponse.json({ videos }, { status: 200 });
  } catch (error) {
    console.error("YouTube API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch YouTube videos" },
      { status: 500 }
    );
  }
}
