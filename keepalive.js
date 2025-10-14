const express = require("express");
const https = require("https");

const app = express();
app.get("/", (req, res) => res.send("✅ Trash-Core bot is running on Render!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Keepalive server running on port ${PORT}`));

// Optional self-ping (keeps free service active)
setInterval(() => {
  https.get(`https://${process.env.RENDER_EXTERNAL_URL}`);
  console.log("💤 Keeping Render service awake...");
}, 20 * 60 * 1000);
