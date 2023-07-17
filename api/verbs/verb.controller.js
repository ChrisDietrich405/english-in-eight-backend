//this is the second file and we are defining our crud operators here
//and we can add validation here. Next the verb.service file will receive the getAll func
//from here and any functions in the controller need to be in the service file. The 
//service file acts like a door to the database

const express = require("express");
const model = require("./verb.model");
const router = express.Router();
const verbService = require(); //connect the verbService to the database 

router.get("/", getAll);

module.exports = router; 

function getAll(req, res, next) { // next is for errors
    verbService.getAll().then(verbs => res.json(verbs)).catch(next);  // the verbs are coming from the db
    //after the getAll function gets them and if it's successful they are converted to JSON

}

