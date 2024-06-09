const express = require("express")
const fxn = require("../Controller/ctrl")
const {validation } = require("../middleware/validation")

const router = express.Router()


router.post("/Signup", validation, fxn.handleSignup)
// router.get("/login", handleLogin)


module.exports = router