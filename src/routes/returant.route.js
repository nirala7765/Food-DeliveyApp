const express = require('express');
const { signupResturant,loginResturant,getAllResturants,getAResturants ,updateServices,AddFoods} = require('../controllers/resturantController');
const { AuthToken } = require('../middlewares/AuthToken');



const ResturantRouter = express.Router();
//user signup
ResturantRouter.post("/resturant",signupResturant);

//login uisers
ResturantRouter.post("/resturant/login",loginResturant);


//get all Resturants

ResturantRouter.get("/resturant",AuthToken,getAllResturants);

// get a resturant using id

ResturantRouter.get("/resturant/:id",AuthToken,getAResturants);

ResturantRouter.patch("/resturant/services",AuthToken,updateServices);


//Add Fodd to Respective Resturants

ResturantRouter.post("/resturant/foods",AuthToken,AddFoods);





module.exports=ResturantRouter;
