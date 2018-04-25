const express = require('express');
const router = express.Router();
const request = require('request');
const knex = require('../db/knex.js');

//place to CRUD blog posts
// router.post('/addPost', (req,res) => {
//     let new_blog = req.body;
    
//     knex.insert([{title: req.body.title, postdate: req.body.postdate, postcontent: req.body.postcontent }]).into('blogpost')
//         .then(function(data){

//         })
        
//         res.send("posted");
// })

router.post('/addPost', (req,res,next) => {
    let new_blog = JSON.stringify(req.body)
    knex('blogpost')
        .insert({title: new_blog.title, postdate: new_blog.postdate, postcontent: new_blog.postcontent})
        .then(function(data){

        })
        res.send('posted')
})

router.get('/', function(req,res) {
    res.send('working')
})





module.exports = router;