const express = require('express');
const dbconnection= require("./src/configs/db.config")
const UserRouter= require('./src/routes/user.route');

require("dotenv").config();


const app = express();
app.use(express.json());
app.use(UserRouter);








app.listen(process.env.PORT, async ()=>{
    console.log('server listening on port 3000')

    await  dbconnection();


});


