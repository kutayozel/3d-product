import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (!req.body.prompt)
    return res.status(400).json({
      message: "Pass in prompt field for image generation",
    });

  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: req.body.prompt,
    n: 1,
    size: "1024x1024",
    response_format: "b64_json",
  });

  if (!response.data) throw new Error("Unable to get image");
  console.log("received url " + response.data.data[0].b64_json);

  res.status(200).json({ photo: response.data.data[0].b64_json });
}
