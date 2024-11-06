const express = require("express");
const uuid = require("uuid");
const app = express();
const port = process.env.PORT || 3000;

const Url = require("./url.model");
const { connect } = require("./db");

const redirectShortUrl = require("./utils/redirectShortUrl");
const { shortenUrl } = require("./utils/shortenUrl");

app.use(express.json());
app.get("/:shortCode", redirectShortUrl);
app.post("/shorten", async (req, res) => {
  try {
    const { longUrl } = req.body;
    if (!longUrl) {
      return res.status(400).send("Please provide a long URL");
    }

    const shortCode = await shortenUrl(longUrl);
    return res
      .status(201)
      .json({ shortUrl: `http://localhost:3000/${shortCode}` });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, async () => {
  await connect();
  console.log(`Server is running at http://localhost:${port}`);
});
