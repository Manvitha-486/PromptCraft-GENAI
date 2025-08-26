import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔹 Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function multiShotDemo() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Multi-Shot Prompting: Provide multiple examples
    const prompt = `
You are a translator. Translate English sentences into French.

Examples:
English: "Good morning"
French: "Bonjour"

English: "Thank you"
French: "Merci"

English: "See you tomorrow"
French: "À demain"

Now translate:
English: "I love learning new things"
French:
    `;

    const result = await model.generateContent(prompt);

    console.log("🔹 Multi-Shot Prompt:");
    console.log(prompt);
    console.log("\n✅ Model Response:");
    console.log(result.response.text());
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

multiShotDemo();
