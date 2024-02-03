const mongoose = require('mongoose');
require("dotenv").config();

const DB_URL = process.env.DB_URL;

const dbconnection = async ()=>{
    try{
        await mongoose.connect(DB_URL);
        console.log("Db connection established");

    }catch(error){

        console.log("Db Connection Failed");

        console.log("Error: " + error);



    }
}


module.exports = dbconnection;