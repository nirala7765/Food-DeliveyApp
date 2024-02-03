const {craeteUser ,returnAllusers,ValidateUserlogin,userByEmail} = require('../services/user_service');
const { HashPassword } = require('../utils/passwordHelper');



const signupUser = async (req,res)=>{

    try{
        const response = await  craeteUser(req.body);
        return res.json({message: response})
    }catch(error){
        return res.json({Error: error});
    }

}

const getAllusers = async(req,res)=>{
    try{
        const response = await returnAllusers();

        return res.json({message: response})
    }catch(error){
        return res.json({Error: error});
    }
}


const loginUsers = async (req,res)=>{

    try{
        const user = {
            email: req.body.email,
            password: req.body.password,

        }

        const response = await ValidateUserlogin(user);
        return res.json({message: response});
        
    }catch(error){
        return res.json({Error: error});
    }

}


const getUserByEmail = async (req,res)=>{
    try{
        const email = req.email;

        const response = await userByEmail(email);
        return res.json({message: response});
    }catch(error){
        return res.json({Error: error});
    }
}

module.exports ={
    signupUser,
    getAllusers,
    loginUsers,
    getUserByEmail,



}