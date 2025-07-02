// /netlify/functions/fetchNews.js
const axios = require("axios");

const AVAILABLE_KEYS = [
  "b0ae4133be2442148d2581435c590d6e",
  "ea1f7422a5004b92a533c1c9b3658040",
  "5c511be76bb840758599f398617b8e32",
  "38449b0c18054f7ba0c8f9ad926321a8",
];

export const handler = async function (event) {
  const { params, second, search } = event.queryStringParameters;

  const API = "https://newsapi.org/v2";
  let keyIndex = 0;
  let success = false;

  while (keyIndex < AVAILABLE_KEYS.length && !success) {
    const KEY = AVAILABLE_KEYS[keyIndex];

    let url = search
      ? `${API}/${params}?${second}=${search}`
      : `${API}/${params}`;

    try {
      const res = await axios.get(url, {
        headers: {
          "X-Api-Key": KEY,
        },
      });

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(res.data),
      };
    } catch (error) {
      if (error.response?.status === 429) {
        keyIndex++; // rotate key
      } else {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: "Failed to fetch data" }),
        };
      }
    }
  }

  return {
    statusCode: 429,
    body: JSON.stringify({ error: "All API keys exhausted" }),
  };
};
