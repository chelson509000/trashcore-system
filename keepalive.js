const express = require("express");
const https = require("https");

const app = express();
app.get("/", (req, res) => res.send("✅ Trash-Core Bot is running!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Keepalive server running on port ${PORT}`));

setInterval(() => {
  https.get(`https://${process.env.APP_NAME}.herokuapp.com`);
  console.log("💤 Keeping dyno awake...");
}, 20 * 60 * 1000);
