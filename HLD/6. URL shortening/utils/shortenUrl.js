const Url = require("../url.model");

const uniqueId = (async () => {
  const { nanoid } = await import("nanoid");
  // Now you can use nanoid here
  return nanoid(10);
})();

module.exports.shortenUrl = async (longUrl) => {
  const existingUrl = await Url.findOne({ longUrl });
  if (existingUrl) {
    return existingUrl.shortCode;
  }
  const id = await uniqueId;

  const urlObj = new Url({ longUrl, shortCode: id });
  urlObj.save();
  return id;
};
