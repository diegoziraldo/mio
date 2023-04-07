const userControllers = {}

const User = require('../models/User')

userControllers.getUsers = async(req,res)=>{
    const users = await User.find();
    res.json(users);
}

userControllers.createUser = async(req,res)=>{
    const {username} = req.body;
    const newUser = new User({username})
    await newUser.save();
    res.json('User Create');
}

userControllers.deleteUser = async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json('User deleted');
}


module.exports = userControllers;
