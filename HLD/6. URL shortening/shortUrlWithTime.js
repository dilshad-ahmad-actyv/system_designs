const express = require("express");
const shortid = require("shortid");
const redis = require("redis");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

const client = redis.createClient({
  url: process.env.REDIS_URL,
});
client.connect();

const PORT = process.env.PORT || 3000;
const DEFAULT_EXPIRATION = process.env.DEFAULT_EXPIRATION || 3600; // Default expiration is 1 hour

// Endpoint to create a short URL
app.post("/shorten", async (req, res) => {
  const { originalUrl, expiration } = req.body;
  const shortUrlId = shortid.generate();
  const shortUrl = `${req.protocol}://${req.get("host")}/${shortUrlId}`;

  const expirationTime = expiration ? expiration : DEFAULT_EXPIRATION;

  // Save URL with expiration time in Redis
  await client.setEx(shortUrlId, expirationTime, originalUrl);

  res.json({ shortUrl, expirationTime });
});

// Endpoint to redirect to the original URL
app.get("/:shortUrlId", async (req, res) => {
  const { shortUrlId } = req.params;

  const originalUrl = await client.get(shortUrlId);

  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).json({ error: "URL not found or expired" });
  }
});

// Error handling for Redis
client.on("error", (err) => {
  console.error("Redis error:", err);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
