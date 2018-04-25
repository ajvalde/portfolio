const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js');

let b_posts = {}


function getBlogs(){
    return knex.select().from('blogpost')
}

router.get('/', function(req,res){
  knex('blogpost').select()
    .then((blogpost) => {
        res.status(200).json(blogpost);
    })
    .catch((error) => {
        res.status(500).json({ error });
    })
})




module.exports = router;