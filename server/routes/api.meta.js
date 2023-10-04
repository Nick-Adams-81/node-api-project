const fetch = require("node-fetch");
const router = require("express").Router();

const url = "https://api.metaphor.systems/search";

const options = (HTTPMethod, input, num) => ({
    method: HTTPMethod,
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
})

router.post("/data/:input/:num?", async (req, res, next) => {
  try {
    const { input } = req.params;
    let { num } = req.params;
    num = Number(num);
    num > 5 ? (num = 5) : num;
    const data = await fetch(url, options("POST", input, num));
    const response = await data.json();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
