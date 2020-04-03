const cheerio = require('cheerio');
const axios = require('axios');

const siteUrl = 'https://www.costco.com/';

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

module.exports = {
  fetchData,
};
