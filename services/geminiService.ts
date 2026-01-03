import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI with a configuration object and directly use process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getLegalAssistantResponse = async (query: string, history: { role: string; content: string }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: query }] }
      ],
      config: {
        systemInstruction: "You are a professional legal assistant for Chris Chua & Associates LLC. Provide general legal information (not specific advice), maintain a trustworthy and helpful tone, and encourage users to book a consultation with the firm's attorneys for specific cases. Keep answers concise.",
        temperature: 0.7,
      }
    });

    // Return the text property from the response, with a fallback if undefined
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I apologize, but I am unable to process your request at the moment. Please try again later or contact our office directly.";
  }
};