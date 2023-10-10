const fetch = require("node-fetch");
const router = require("express").Router();

const postURL = "https://api.metaphor.systems/search";
const getURL = (id) => `https://api.metaphor.systems/contents?ids=%22${id}`;

const postOptions = (HTTPMethod, input, num) => ({
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
});

const getOptions = (HTTPMethod) => ({
  method: HTTPMethod,
  headers: {
    accept: "application/json",
    "x-api-key": process.env.API_KEY,
  },
});

router.post("/data/:input/:num?", async (req, res, next) => {
  try {
    let { input, num } = req.params;
    num = Number(num);
    num > 5 ? (num = 5) : num;
    const data = await fetch(postURL, postOptions("POST", input, num));
    const response = await data.json();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.get("/data/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await fetch(getURL(id), getOptions("GET"));
    const response = await data.json();
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
