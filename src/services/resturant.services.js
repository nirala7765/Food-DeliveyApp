

const Resturant = require('../models/Resturant.Model')

const Foods = require('../models/Food.model');
const {generateSalt,HashPassword,decodePssword} = require('../utils/passwordHelper');

const {createToken} = require('../utils/tokenHelper')


const  createResturant = async (body )=> {


    const resturant = {
        name:body.name,
        ownerName:body.ownerName,
        email:body.email,
       
        address:body.address,
        phone:body.phone,

        rating:body.rating,

        serviceAvailable: false,
    };


    const salt = generateSalt();
    resturant.password = HashPassword(body.password,salt);






    const result = await Resturant.create(resturant);
    
    return result;



}



const ValidateResturantlogin = async(resturant)=>{
    const checkResturant = await Resturant.findOne({email:resturant.email});


    if(checkResturant){

        //verify password logic

        const checkPassword = decodePssword(resturant.password,checkResturant.password);

        if(checkPassword){

            const token = createToken(resturant.email);
            
            return {result:"Logged in SucessFully!",token:token} 
            
            // return "Successfully logged in" 
        }
        else{
            return "login Failed Password Incorrect!"
        }

    }else{
        return "Invalid Email"
    }


}

const returnAllResturants = async()=>{

    const resturants = await Resturant.find();

    if(resturants){
        return resturants

    }else{
        return "No Resturants Found!"
    }

}

const returnAResturants = async (id)=>{
    const resturant = await Resturant.findOne({_id:id}).populate("foods");
    return resturant;
    
}

const toggleServices = async (email)=>{

    const resturant = await Resturant.findOne({email:email});

    if(resturant){
        resturant.serviceAvailable = !resturant.serviceAvailable;

        const response = await resturant.save();

        return response;
    }else{
        return "No Register Restorent For this Email ";
    }


}


const creatFood = async (email,body)=>{
    const resturant = await Resturant.findOne({email:email});

    if(resturant){
        const food = {
            resturantId: resturant.id,
            name:body.name,
            description:body.description,
            price:body.price,
            foodtype:body.foodtype,
            rating:body.rating,

            
        };

        const response = await Foods.create(food);

        resturant.foods.push(response);

        await resturant.save();

        return response;


    }else{
        return "No Resturant Found for this Email ";
    }

}





module.exports={
  createResturant ,
  ValidateResturantlogin,
  returnAllResturants,
  returnAResturants,
  toggleServices,
  creatFood,




}