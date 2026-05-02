import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { EXPLAIN_PROMPT } from "@/lib/prompts";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { error, lang } = await req.json();

    if (!error) {
      return NextResponse.json(
        { error: "Missing error input" },
        { status: 400 },
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
    const prompt = EXPLAIN_PROMPT.replace("{{ERROR}}", error).replace(
      "{{LANG}}",
      lang || "auto",
    );

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const cleanedText = text.replace(/```json\n?|\n?```/g, "").trim();
    const data = JSON.parse(cleanedText);

    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Gemini Error:", err);
    return NextResponse.json({ error: "Analysis failed", details: err.message }, { status: 500 });
  }
}
