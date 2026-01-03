
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

/**
 * Call this function to transform raw WordPress text/HTML into a structured JSON article.
 * This is perfect for migrating 90+ articles quickly.
 */
export const transformRawArticleToJson = async (rawText: string) => {
  if (!process.env.API_KEY) return null;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Transform this raw blog post into a structured JSON object. 
      Clean up HTML tags, create a short compelling excerpt, choose a category from: 
      Litigation, Corporate, Real Estate, Family Law, Criminal Defense, Insurance Claims.
      
      Raw Content: ${rawText}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            slug: { type: Type.STRING },
            excerpt: { type: Type.STRING },
            content: { type: Type.STRING },
            category: { type: Type.STRING },
            author: { type: Type.STRING },
            publishDate: { type: Type.STRING }
          },
          required: ["title", "slug", "excerpt", "content", "category"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Migration helper error:", error);
    return null;
  }
};
