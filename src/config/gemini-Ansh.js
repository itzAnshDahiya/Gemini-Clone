// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai";

// // const apiKey = process.env.GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI("AIzaSyAfvozusgEuY0LrvEcLH - PFOs7Fvmi4P4E");

// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function runChat(prompt) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [],
//   });

//   const result = await chatSession.sendMessage("prompt");
//   console.log(result.response.text());
// }

// export default runChat;

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Safety settings to prevent harmful content
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

// Configuration for generation
const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
};

class GeminiService {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error("Gemini API key is required");
    }

    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({
      model: "gemini-pro",
      safetySettings,
      generationConfig,
    });
  }

  async generateText(prompt) {
    if (!prompt) {
      throw new Error("Prompt is required");
    }

    try {
      const result = await this.model.generateContent(prompt);
      const response = result.response;
      return response.text();
    } catch (error) {
      console.error("Error generating text:", error);
      throw new Error("Failed to generate text from Gemini");
    }
  }

  async startChat(history = []) {
    try {
      const chatSession = this.model.startChat({
        generationConfig,
        history: history.map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.parts }],
        })),
      });

      return chatSession;
    } catch (error) {
      console.error("Error starting chat session:", error);
      throw new Error("Failed to start chat session");
    }
  }

  async sendMessage(chatSession, message) {
    if (!message) {
      throw new Error("Message is required");
    }

    try {
      const result = await chatSession.sendMessage(message);
      return result.response.text();
    } catch (error) {
      console.error("Error sending message:", error);
      throw new Error("Failed to send message in chat session");
    }
  }
}

// Initialize with your actual API key (preferably from environment variable)
const geminiService = new GeminiService("YOUR_ACTUAL_API_KEY");

export default geminiService;