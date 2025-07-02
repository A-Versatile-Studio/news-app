const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3001;

const AVAILABLE_KEYS = [
  "b0ae4133be2442148d2581435c590d6e",
  "ea1f7422a5004b92a533c1c9b3658040",
  "5c511be76bb840758599f398617b8e32",
  "38449b0c18054f7ba0c8f9ad926321a8",
];

app.use(cors()); // allow all origins

app.get("/news", async (req, res) => {
  const { params = "everything", second = "q", search = "india" } = req.query;

  const baseUrl = `https://newsapi.org/v2/${params}?${second}=${search}`;
  let success = false;
  let keyIndex = 0;

  while (keyIndex < AVAILABLE_KEYS.length && !success) {
    try {
      const response = await axios.get(baseUrl, {
        headers: {
          "X-Api-Key": AVAILABLE_KEYS[keyIndex],
        },
      });

      success = true;
      return res.status(200).json(response.data);
    } catch (err) {
      if (err.response?.status === 429) {
        console.warn(`Key ${keyIndex + 1} rate-limited, switching key...`);
        keyIndex++;
      } else {
        return res.status(500).json({ error: "News fetch failed", details: err.message });
      }
    }
  }

  res.status(429).json({ error: "All API keys exhausted" });
});

app.listen(PORT, () => {
  console.log(`✅ Proxy server running at http://localhost:${PORT}`);
});
