
const Users = require("../model/usermodel")
const transaction = require ("../model/transaction-model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const token  = process.env.userToken
const validation = require("../middleware/validation")


const handleSignup = async (req, res) => {

    const { fullName, email, password, phoneNumber } = req.body

    // if(!fullName) {
    //     return res.status(400).json({
    //         message: "Please, Enter your Full name" })  }

    // if(!email) {
    //     return res.status(400).json({
    //         message: "Please, Enter your email" }) }

    // if(!password) {
    //         return res.status(400).json({
    //             message: "Please, Enter your password" }) }

     // if(!phoneNumber) {
    //         return res.status(400).json({
    //             message: "Please, Enter your phoneNumber" }) }
    
    // const hashedPassword = await bcrypt.hash(password, 12)

    // if(!PhoneNumber) {
    //      return res.status(400).json({
    //       message: "Please, Enter your phone Number" }) }

    //  const user = await Users.findOne({ email })

    //  if(user){
    //      return res.status(400).json({message: "Account Already Exit"})
    //  }        

    const hashedPassword = await bcrypt.hash(password, 12)
    
     const newUser = new Users({ fullName, email, password: hashedPassword, phoneNumber })

     await newUser.save()

      return res.status(200).json({
     message: "Successful",
     user: newUser
 })

  }

     const handleLogin = async(req, res)=>{

        // accept user details
    
        const { email, password } = req.body
    
        if(!email || !password){
            return res.status(400).json({
                message: "Enter your login details"
            })
        }
    
    
        // Check if user exist in your database
    
        const user = await Users.findOne({email})
    
            
        if(!user){
            return res.status(404).
            json({message: "This user account does not exist!"})
        }
    
        // Check user password to match the hashed password
    
        const passwordchecker =  bcrypt.compare(password, user.password)
    
        if(!passwordMatch){
            return res.status(400).json({
                message: "Incorrect email or password!"
            })
        }
    
            
        // Generate an Token that will grant user access
        //Jsonwebtoken or passport
    
        const userPayload = {
            id: user._id,
            email: user.email
        }
    
        const accessToken = jwt.sign(userPayload, process.env.ACCESS_TOKEN, {expiresIn: '30m'})
    
    
    
        return res.status(200).json({
            message: "Successful",
            accessToken,
            user
    
        })
    }
    
   


module.exports = {
    handleSignup,
    handleLogin

}