require('dotenv').config()
const { user } = require("../model/Usermodel");
var jwt = require('jsonwebtoken');

const signin = async (req, res, next) => {

  try {
    const { email, password, username } = req.body;
  
    let newpassword= await bcrypt.hash(password, 12)

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    let users = new user({email:email,username:username,password:newpassword});
    await users.save()

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
}

module.exports = { signin }