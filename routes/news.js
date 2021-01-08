const express = require('express')
const router = express.Router()
const axios = require('axios')



router.get('', async(req, res) =>{
   
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=armenia&apiKey=1d9ca5b13652436b801f9572b8878b27`)
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log(newsAPI.data.articles)
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


})




router.get('/:id', async(req, res) => {
    let articleURL = req.query.articleURL

    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=armenia&apiKey=1d9ca5b13652436b801f9572b8878b27&s=${articleURL}`)
        res.render('newsSingle', { article : newsAPI.url })
    } catch (err) {
        if(err.response) {
            res.render('newsSingle', { article : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('newsSingle', { article : null })
            console.log(err.requiest)
        } else {
            res.render('newsSingle', { article : null })
            console.error('Error', err.message)
        }
    } 
})


router.post('/', async(req, res) => {
    let term = req.body.term
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=armenia&apiKey=1d9ca5b13652436b801f9572b8878b27/search?term=${term}`)
        res.render('newsSearch', { articles : newsAPI.url })
    } catch (err) {
        if(err.response) {
            res.render('newsSearch', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('newsSearch', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('newsSearch', { articles : null })
            console.error('Error', err.message)
        }
    } 
})

module.exports = router