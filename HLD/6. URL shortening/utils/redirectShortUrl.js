const Url = require("../url.model");

async function redirectShortUrl(req, res) {
  const { shortCode } = req.params;
  const existingUrl = await Url.findOne({ shortCode });
  if (existingUrl) {
    return res.redirect(existingUrl.longUrl);
  }
  res.status(404).send("Url not found");
}

module.exports = redirectShortUrl;
