
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const generateDentalImage = async (prompt: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY! });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `${prompt}, high resolution, professional photography, clean aesthetic, dental clinic theme.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};

export const generateLogo = async (): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY! });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: "A professional, ultra-clean minimalist logo for a premium dental clinic. The logo is a stylized, elegant tooth shape. Inside the tooth, the acronym 'C.D.S' is clearly written in a bold, luxury modern sans-serif font. Color palette: deep maroon (#800000) and soft lilac (#B19CD9). The logo must be completely isolated on a transparent background, high-resolution vector style, 2D flat design, no shadows, no gradients, professional branding.",
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating logo:", error);
    return null;
  }
};
