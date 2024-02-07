const User = require('../models/user.model')
const {generateSalt,HashPassword,decodePssword} = require('../utils/passwordHelper');

const {createToken} = require('../utils/tokenHelper')


const  craeteUser = async (body )=> {


    const user = {
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
       
        address:body.address,
        phone:body.phone,
    };


    const salt = generateSalt();
    user.password = HashPassword(body.password,salt);






    const result = await User.create(user);
    
    return result;



}


const returnAllusers = async () =>{

    const result = await User.find();

    return result;


}




const ValidateUserlogin = async(user)=>{
    const checkUser = await User.findOne({email:user.email});


    if(checkUser){

        //verify password logic

        const checkPassword = decodePssword(user.password,checkUser.password);

        if(checkPassword){

            const token = createToken(user.email);
            
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


const userByEmail = async(email)=>{
    const user = await User.findOne({email:email});

    if(user){
        return user;
    
    }else{
        return "user not found"
    }
}




module.exports={
    craeteUser,
    returnAllusers,
    ValidateUserlogin,
    userByEmail,


}