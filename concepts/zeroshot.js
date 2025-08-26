import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔹 Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function zeroShotDemo() {
  try {
    // 🔹 Use the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Zero-Shot Prompting: Directly asking without examples
    const prompt = "Translate this English sentence to French: 'How are you today?'";

    const result = await model.generateContent(prompt);

    console.log("🔹 Zero-Shot Prompt:");
    console.log(prompt);
    console.log("\n✅ Model Response:");
    console.log(result.response.text());
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

zeroShotDemo();
