const Post = require('../models/postModel');

const mongoose = require('mongoose')

const getPosts = async (req, res) => {
    const {id} = req.body
    const posts = await Post.find({id}).sort({createdAt: -1})

    res.status(200).json(posts)
}

const createPost = async (req, res) => {
    const {id,userID,first_name,last_name,title,content,picture_path,likes,comments} = req.body

    //add doc to db
    try {
        const post = await Post.create({id,userID,first_name,last_name,title,content,picture_path,likes,comments})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deletePost = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Post doesn't exist"})
    }

    const post = await Post.findOneAndDelete({_id: id})

    if (!post) {
        return res.status(404).json({error: "Post doesn't exist"})
    }

    res.status(200).json(post)
}

const updatePost = async (req, res) => {
    const { id,content,picture_path } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Post doesn't exist"})
    }

    const post = await Post.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!post) {
        return res.status(404).json({error: "Post doesn't exist"})
    }

    res.status(200).json(post)
}


module.exports = {
    createPost,
    getPosts,
    deletePost,
    updatePost
}
