import genAI from "@/app/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { goal } = await request.json();
    const prompt = `Create a clear, structured, and user-friendly step-by-step learning roadmap to become a ${goal}. 
                    Organize the output into phases and milestones. 
                    Use section titles, short bullet points, and concise steps. 
                    Avoid markdown (*, **, -, #). Format it for easy display on a website.
                    Example structure:
                    Phase 1: Title
                    Milestone 1: Title
                    - Step 1: Do this
                    - Step 2: Learn that
                    - Tools: Tool 1, Tool 2`;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.candidates[0].content.parts[0].text;
    return new NextResponse(JSON.stringify({ roadmap: text }), {
      status: 200,
      message: "Roadmap generated successfully",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to generate roadmap" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
