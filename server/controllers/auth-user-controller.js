const User = require('../model/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isUser = await User.findOne({ email });

    if (isUser) {
      res.status(401).json({message:'User Already Exists !'});
    } else {
      const hashedPass = await bcrypt.hash(password, 10);
      User.create({
        username,
        email,
        password: hashedPass,
      });
      res.status(201).json({ message: 'User Registered' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error while User Registration' });
  }
};

const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUser = await User.findOne({ email });

    if (!isUser) {
      res.status(401).json({ message: 'Invalid Creds' });
    } else {
      const isPassword = await bcrypt.compare(password, isUser.password);

      const token = jwt.sign(
        {
          email,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '1d',
        }
      );
        
 
      
      if (!isPassword) {
        res.status(401).json({ message: 'Invalid Creds' });
      } else {
        res.status(200).json({ message: 'Login successful',token});
      }
    }
  } catch (error) {
    console.log('Error whole Login');
    res.status(400).json({ message: 'Error whole Login' });
  }
};

module.exports = { UserRegister, UserLogin };
