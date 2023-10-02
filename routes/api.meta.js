const fetch = require("node-fetch");
const router = require("express").Router();
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const url = "https://api.metaphor.systems/search";

router.post("/data/:input/:num", async (req, res, next) => {
  try {
    const { input } = req.params;
    let { num } = req.params;
    num = Number(num)
    const data = await fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": process.env.API_KEY,
      },
      body: JSON.stringify({
        numResults: num,
        query: `${input}`,
        useAutoprompt: false,
      }),
    });
    const response = await data.json();
    res.json(response);
    console.log(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
