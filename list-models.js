// server/list-models.js
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

if (!process.env.GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY not set in .env");
  process.exit(1);
}

const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

(async () => {
  try {
    const res = await client.listModels();
    console.log("Available models (trimmed):");
    console.log(JSON.stringify(res, null, 2));
  } catch (err) {
    console.error("List models error:", err);
    process.exit(1);
  }
})();