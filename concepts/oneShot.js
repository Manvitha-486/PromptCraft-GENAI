import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔹 Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function oneShotDemo() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // One-Shot Prompting: Provide one example
    const prompt = `
You are a translator. Translate English sentences into French.

Example:
English: "Good morning"
French: "Bonjour"

Now translate:
English: "How are you today?"
French:
    `;

    const result = await model.generateContent(prompt);

    console.log("🔹 One-Shot Prompt:");
    console.log(prompt);
    console.log("\n✅ Model Response:");
    console.log(result.response.text());
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

oneShotDemo();
