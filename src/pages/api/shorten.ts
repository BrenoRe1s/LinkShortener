// pages/api/shorten.ts
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }
    
    const shortId = Math.random().toString(36).substring(2, 8);


    const shortUrl = `${req.headers.origin}/${shortId}`;

    return res.status(200).json({ shortUrl });
  }

  return res.status(405).json({ error: "Method not allowed" });
}