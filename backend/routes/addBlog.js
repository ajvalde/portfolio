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

router.post('/addPost', (req,res) => {
    console.log(req.body)
    knex('blogpost')
        .insert([{title: req.body.title, postdate: req.body.postdate, postcontent: req.body.postcontent}])
        .then((blogpost) => {

        })
        res.send('posted')
})

router.get('/', function(req,res) {
    res.send('working')
})





module.exports = router;