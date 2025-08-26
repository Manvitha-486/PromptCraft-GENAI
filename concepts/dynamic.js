import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔹 Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Example function to create a dynamic prompt
function createPrompt(userName, topic) {
  return `
Hello ${userName}, I will explain the concept of ${topic} in a simple way.

Please provide:
1. A short introduction
2. One real-world example
3. A summary in one line
`;
}

async function dynamicPromptDemo() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Imagine this data came from user input or a database
    const userName = "Aarav";
    const topic = "Black Holes";

    // Generate the prompt dynamically
    const prompt = createPrompt(userName, topic);

    const result = await model.generateContent(prompt);

    console.log("🔹 Dynamic Prompt:");
    console.log(prompt);
    console.log("\n✅ Model Response:");
    console.log(result.response.text());
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

dynamicPromptDemo();
