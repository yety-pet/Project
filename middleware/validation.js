const bcrypt = require("bcrypt")


// const validEmail = (email)=> {
//     const emailPattern = /^[a-zA-Z0-9,%+-]+@[a-za-Z0-9,-]+\,[a-zA-Z]{2}$/

//     return emailPattern.test(email)
// }


const validation = async (req, res, next) => {

    const {fullName, email, password, phoneNumber} = req.body
    let errors = [ ]

   if(!fullName){
    errors.push ("Enter your Full Name ")
   } 

   if(!email){
    errors.push("Enter your email, please")
   } 
//    else

//    if(!validEmail (email)){
//     errors.push("Invalid e-mail")
//    }

   if(!password){
    errors.push("Enter Password")
   } else

   if(password.lenth<6){
    errors.push("Password must be at least 6 characters")
    }  else

    // if(!/[0-9]/).test password) {
    //     errors.push("Password must contain Number")
    //    } 


    if(!PhoneNumber) {
    errors.push("Please, Enter your phone Number") 
    } 

const user = await Users.findOne({ email })

if(user){
    errors.push({message: "Account Already Exit"})
}        

   if(errors.length >0){
    return res.status(400).json({message: errors})
   } 

  next
}


module.exports = validation