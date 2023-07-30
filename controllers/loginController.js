const bcrypt = require('bcrypt');
const session = require('express-session');
const db = require('../utils/database');

exports.loginPage = (req,res)=>{
  const data = {
    title: 'Login Page'
  }
  res.render('login',{
    loginData : data
  });
};


exports.loginUser =  (req, res) => {

};