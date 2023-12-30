const User = require('../models/userModel');

const mongoose = require('mongoose')

const getUsers = async (req, res) => {
    // the object is empty because we want ALL users from our db
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "User doesn't exist"})
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({error: "User doesn't exist"})
    }

    res.status(200).json(user)
}

const createUser = async (req, res) => {
    const {id,first_name,last_name,location,picture_path,profession,interests,achievements,communities} = req.body

    //add doc to db
    try {
        const user = await User.create({id,first_name,last_name,location,picture_path,profession,interests,achievements,communities})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteUser = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "User doesn't exist"})
    }

    const user = await User.findOneAndDelete({_id: id})

    if (!user) {
        return res.status(404).json({error: "User doesn't exist"})
    }

    res.status(200).json(user)
}


const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "User doesn't exist"})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user) {
        return res.status(404).json({error: "User doesn't exist"})
    }

    res.status(200).json(user)
}


module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
}
