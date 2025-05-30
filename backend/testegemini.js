const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testar() {
  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });
    const result = await model.generateContent("O que é JavaScript?");
    console.log("Resposta Gemini:", result.response.text());
  } catch (err) {
    console.error("ERRO GEMINI:", err);
  }
}

testar();
