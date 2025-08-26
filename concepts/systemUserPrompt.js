import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔹 Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function systemUserDemo() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "system",
          parts: [{ text: "You are a Shakespearean poet. Always answer in poetic style." }],
        },
        {
          role: "user",
          parts: [{ text: "Describe a smartphone." }],
        },
      ],
    });

    console.log("🔹 System + User Prompt Demo");
    console.log("\nSystem Prompt: 'You are a Shakespearean poet. Always answer in poetic style.'");
    console.log("User Prompt: 'Describe a smartphone.'");
    console.log("\n✅ Model Response:");
    console.log(result.response.text());
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

systemUserDemo();
