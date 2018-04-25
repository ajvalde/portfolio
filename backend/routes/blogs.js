const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js');




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

router.post('/', (req,res) => {
    console.log(req.body)
    knex('blogpost')
        .insert([{title: req.body.title, postdate: req.body.postdate, postcontent: req.body.postcontent}])
        .then((blogpost) => {

        })
        res.send('posted')
})

router.get('/:id', function(req,res){
    knex.select().from('blogpost').where('id', req.params.id)
        .then(function(data){
            res.send(data)
        })
})

router.delete('/:id', function(req,res){
    knex.select().from('blogpost').where('id', req.params.id).del()
        .then(function(data){

        })
        res.send('deleted')
})




module.exports = router;