const express = require("express");
const scrapeTitle = require("./scrape-title");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", async (req, res) => {
  const title = await scrapeTitle("http://example.com");
  res.send({ title });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
