const jwt = require("jsonwebtoken");
require("dotenv").config();


const createToken = (email) => {

    const token = jwt.sign(
        {
            email
        },
        process.env.JWT_SECRETE,
        {
            expiresIn: "3d",
        }
        );



    return token;



};


const decodeToken = (token)=>{
    const decodedDetails = jwt.verify(token,JWT_SECRETE);
    return decodedDetails;
}


module.exports = {
    createToken,
    decodeToken,

} 



