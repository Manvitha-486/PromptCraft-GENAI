import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔹 Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function temperatureDemo(temp) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
Write a short creative description of the sun in one sentence.
    `;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: temp },
    });

    console.log(`\n🌡️ Temperature = ${temp}`);
    console.log("Prompt:", prompt);
    console.log("Response:", result.response.text());
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

// Run with different temperatures
(async () => {
  await temperatureDemo(0.0);  // Deterministic
  await temperatureDemo(0.7);  // Balanced creativity
  await temperatureDemo(1.0);  // More randomness
})();
