const bcrypt = require('bcrypt');


const generateSalt = ()=>{
    const salt = bcrypt.genSaltSync(10);
    return salt;

}


const HashPassword = (plainPassword, salt) =>{
    const hashedPassword = bcrypt.hashSync(plainPassword,salt);

    return hashedPassword;
}


const decodePssword = (plainPassword, HashPassword)=>{
    const result = bcrypt.compareSync(plainPassword,HashPassword);
    return result;
}

module.exports ={
    generateSalt,
    HashPassword,
    decodePssword,
    
}