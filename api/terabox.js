// api/terabox.js
// Credit: Dev @Labani

export default function handler(req, res) {
  // Retrieve TeraBox link from query parameters
  const { url } = req.query;

  if (!url) {
    res.status(400).json({ error: "URL is missing.", message: "Add ?url=<Terabox link>" });
    return;
  }

  try {
    // Encode the URL to base64
    const base64 = Buffer.from(url).toString("base64");

    // Construct the final API URL
    const bypassbotURL = `https://dl.bypassbot.workers.dev/${base64}`;

    res.status(200).json({ bypassbotURL, credit: "Dev @Labani" });
  } catch (error) {
    res.status(500).json({ error: "Server Error.", message: error.toString() });
  }
}

