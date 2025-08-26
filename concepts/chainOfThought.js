import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔹 Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function chainOfThoughtDemo() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Chain of Thought Prompting
    const prompt = `
You are a reasoning assistant. Solve the problem step by step before giving the final answer.

Question:
If there are 3 apples and you take away 2, how many do you have?

Please show your reasoning clearly, then give the final answer.
    `;

    const result = await model.generateContent(prompt);

    console.log("🔹 Chain-of-Thought Prompt:");
    console.log(prompt);
    console.log("\n✅ Model Response:");
    console.log(result.response.text());
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

chainOfThoughtDemo();
