const cheerio = require("cheerio");
const axios = require("axios");

const searchString = "google";
const encodedString = encodeURI(searchString);
console.log(`Search hrefs for ${encodedString}:`);

const AXIOS_OPTIONS = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
  },
};

const getHrefs = () => {
  return axios
    .get(
      `https://www.google.com/search?q=${encodedString}&hl=en&gl=us`,
      AXIOS_OPTIONS
    )
    .then(({ data }) => {
      let $ = cheerio.load(data);

      const hrefs = [];

      $(".yuRUbf > a").each((i, el) => {
        hrefs[i] = $(el).attr("href");
      });

      const result = [];
      for (let i = 0; i < hrefs.length; i++) {
        result[i] = {
          href: hrefs[i],
        };
      }
      console.log(result);
    });
};

getHrefs();
