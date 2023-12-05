// Want to use async/await? Add the `async` keyword to your outer function/method.
const axios = require("axios");
const countries = require("./countriesdata.json");
require('dotenv').config();

async function getNews(country) {
  try {
    const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
    console.log(response);
    return{
     "country":country,
     "articles": response.data.articles
    } 
    
  } catch (error) {
    console.error(error);
  }
}

module.exports = async function () {
    // try {
    //   const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
    //   console.log(response);
    //   return response.data;
    // } catch (error) {
    //   console.error(error);
    // }
    //https://jsonplaceholder.typicode.com/posts

    var newsPromise = countries.map(getNews);
    return Promise.all(newsPromise).then(newsObject => {
      console.log('newsObject:', newsObject);
      return [].concat.apply([],newsObject);
    })
}