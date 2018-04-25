const express = require('express');
const router = express.Router();
const request = require('request');
const knex = require('../db/knex.js');

router.get('/', function(req,res){
    res.send('working');
})


module.exports = router;