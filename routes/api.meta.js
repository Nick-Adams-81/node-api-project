const fetch = require("node-fetch");
const router = require("express").Router();

const url = "https://api.metaphor.systems/search";
const searchString = "Dallas stars hockey"

const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    "x-api-key": process.env.API_KEY,
  },
  body: JSON.stringify({ numResults: 5, query: `${searchString}`, useAutoprompt: false }),
};

router.post("/data", async (req, res, next) => {
  try {
    const data = await fetch(url, options);
    const response = await data.json();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
