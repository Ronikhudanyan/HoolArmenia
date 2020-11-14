const express = require('express')
const router = express.Router()
const axios = require('axios')
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('1d9ca5b13652436b801f9572b8878b27');

// newsapi.v2.everything({
//     q: 'armenia',
//     sources: 'bbc-news,the-verge',
//     domains: 'bbc.co.uk, techcrunch.com',
//     from: '2017-12-01',
//     to: '2017-12-12',
//     language: 'en',
//     sortBy: 'relevancy',
//     page: 2
//   }).then(response => {
//     console.log(response);
//   })




router.get('', async(req, res) =>{
   
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=armenia&apiKey=1d9ca5b13652436b801f9572b8878b27`)
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log(newsAPI.data)
        res.render('news', { articles : newsAPI.data.articles })
    } catch (err) {
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('news', { articles : null })
            console.log(err.request)
        } else {
            res.render('news', { articles : null })
            console.error('Error', err.message)
        }
    }

    // axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=1d9ca5b13652436b801f9572b8878b27`)
    // .then(response => {
    //     console.log(response.data)
    //     response.render('news', {articles: response.data })
    // })
    // //     res.render('news', { articles : newsAPI.data })









})

module.exports = router