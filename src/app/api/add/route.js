import { NextResponse } from "next/server";

export async function POST(request) {
  const { data } = await request.json();
  console.log(data);

  return NextResponse.json({ sucess: true, data: "Api route in next.js" });
}
