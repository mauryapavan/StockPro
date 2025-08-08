require('dotenv').config()
var jwt = require('jsonwebtoken');
const { user } = require('../model/Usermodel');


const auth= async (req, res, next) => {
    const {token} = req.body
   
    let cleanedToken =token.replace(/^"|"$/g, '');
    
    if (!token) {
      return res.json({ status: false,message:"please log in" })
    }
    var decoded = jwt.verify(cleanedToken, process.env.secret_token);
    
    let email = decoded.email;
    const users = await user.findOne({ email });
    if (users) { return res.json({ status: true, users: users }) }
        else { return res.json({ status: false ,message:"something is wrong"}) }
}

module.exports={auth};