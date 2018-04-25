const express = require('express');
const router = express.Router();
const request = require('request');
const knex = require('../db/knex.js');

//place to CRUD blog posts

router.get('/', function(req,res) {
    res.send('working')
})



router.post('/addBook', (req,res) => {
    let new_blog = req.body;
    knex('blogpost').insert({title: new_blog.title, postdate: new_blog.postdate, postcontent: new_blog.postcontent })
        .then(function(data){

        })
        res.send('posted');
})


module.exports = router;