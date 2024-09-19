import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { prompt, model } = req.body;

      const response = await axios.post(
        'https://api.together.xyz/v1/images/generations',
        {
          model: model || "stabilityai/stable-diffusion-xl-base-1.0",
          prompt: prompt,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
        }
      );

      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch image generation." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
