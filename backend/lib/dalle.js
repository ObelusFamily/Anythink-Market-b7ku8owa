const axiosLib = require("axios");
var TOKEN = require("../config").openai_token;

const baseURL = "https://api.openai.com"

const axios = axiosLib.create({
  baseURL: baseURL,
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`,
  },
});

async function generateImage(prompt, number, size) {
  try {
      const result = await axios.post(`/v1/images/generations`, {
        prompt: prompt,
        n: number,
        size: size,
      });

      return result.data;
  } catch (error) {
      console.error(`failed to generate dall-e image by prompt ${prompt}: ${error}`)
  }
}