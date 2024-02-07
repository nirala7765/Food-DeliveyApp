const { models } = require("mongoose");

const {createResturant, ValidateResturantlogin,returnAllResturants,returnAResturants ,toggleServices,creatFood}= require('../services/resturant.services')

const signupResturant = async (req,res) => { 

    try{

        const response = await createResturant(req.body);

        return res.json({message: response})

    }catch(error){

       return res.json({message:error});

    }
}


const loginResturant = async (req,res)=>{
    try{
        const resturant = {
            email: req.body.email,
            password: req.body.password,

        }

        const response = await ValidateResturantlogin(resturant);
        return res.json({message: response});
        
    }catch(error){
        console.log(error);
        return res.json({Error: error});
    }
}



const getAllResturants = async (req,res)=>{

    try{

        const response = await returnAllResturants();
        return res.json({message: response});


    }catch(error){
        console.log(error);

        return res.json({Error:error});

    }



}

const getAResturants= async (req,res)=>{

    try{

        const id = req.params.id;

        const response = await returnAResturants(id);

        return res.json({message:response});

    }catch(error){

       console.log(error)

        return res.json({Error:error});

    }
}


const updateServices = async(req,res)=>{
    try{
       const email = req.email ;
       const response = await toggleServices(email);

       return res.json({message:response});

    }catch(error){

        console.log(error)

        return res.json({Error:error});

    }
}

const AddFoods = async (req,res)=>{

    try{

        const email = req.email;

        const response = await creatFood(email,req.body);
        

        return res.json({message: response})

    }catch(error){

       return res.json({message:error});

    }

}

module.exports={
    signupResturant,
    loginResturant,
    getAllResturants,
    getAResturants,
    updateServices,
    AddFoods,



}