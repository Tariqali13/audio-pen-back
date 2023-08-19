const axios = require("axios");
const config = require("config");
const edenAI = config.get("edenAi");

module.exports = {
  getSummarizeText: async (params) => {
    const { text } = params;
    console.log("edenAI.customAiToken", edenAI.customAiToken);
    try {
      const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/text/summarize",
        headers: {
          authorization: `Bearer ${edenAI.customAiToken}`,
        },
        data: {
          output_sentences: 5,
          providers: "openai",
          text: text,
          language: "en",
        },
      };
      console.log("options", options, edenAI.customAiToken);
      const response = await axios.request(options);
      return response;
    } catch (e) {
      console.log("er", e);
      return false;
    }
  },
  getTopic: async (params) => {
    const { text } = params;
    try {
      const options2 = {
        method: "POST",
        url: "https://api.edenai.run/v2/text/topic_extraction",
        headers: {
          authorization: `Bearer ${edenAI.customAiToken}`,
        },
        data: {
          providers: "openai",
          text: text,
          language: "en",
        },
      };
      console.log("options2", options2, edenAI.aiToken);
      const topic = await axios.request(options2);
      return topic;
    } catch (e) {
      console.log("er", e);
      return false;
    }
  },
};
