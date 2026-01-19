
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

// Função auxiliar para cachear imagens e evitar chamadas excessivas à API
const getCachedImage = (key: string): string | null => {
  try {
    return localStorage.getItem(`cache_img_${key}`);
  } catch (e) {
    return null;
  }
};

const setCachedImage = (key: string, data: string) => {
  try {
    localStorage.setItem(`cache_img_${key}`, data);
  } catch (e) {
    // Silencioso se o storage estiver cheio
  }
};

export const generateDentalImage = async (prompt: string): Promise<string | null> => {
  const cacheKey = btoa(prompt).substring(0, 16);
  const cached = getCachedImage(cacheKey);
  if (cached) return cached;

  try {
    if (!API_KEY) throw new Error("API Key not found");
    const ai = new GoogleGenAI({ apiKey: API_KEY });
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
        const base64 = `data:image/png;base64,${part.inlineData.data}`;
        setCachedImage(cacheKey, base64);
        return base64;
      }
    }
    return null;
  } catch (error: any) {
    console.error("Error generating image:", error?.message || error);
    return null;
  }
};

export const generateLogo = async (): Promise<string | null> => {
  const cacheKey = "clinic_logo_main";
  const cached = getCachedImage(cacheKey);
  if (cached) return cached;

  try {
    if (!API_KEY) throw new Error("API Key not found");
    const ai = new GoogleGenAI({ apiKey: API_KEY });
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
        const base64 = `data:image/png;base64,${part.inlineData.data}`;
        setCachedImage(cacheKey, base64);
        return base64;
      }
    }
    return null;
  } catch (error: any) {
    // Se for erro de cota, o App.tsx já tem fallback para texto, então apenas logamos.
    console.warn("Logo generation skipped (Quota or API error):", error?.message || error);
    return null;
  }
};
