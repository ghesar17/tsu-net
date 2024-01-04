const Post = require('../models/postModel');

const mongoose = require('mongoose')

// anyone can get all of a user's posts, regardless of authorization, so all we need are the desired user's username
const getPosts = async (req, res) => {
    const { user_name } = req.params
    const posts = await Post.find({ user_name }).sort({createdAt: -1})

    res.status(200).json(posts)
}

// assume authorization has been given to end user for following methods
const createPost = async (req, res) => {
    const { user_name,title,content,picture_path,likes,comments } = req.body

    //add doc to db
    try {
        const post = await Post.create({user_name,title,content,picture_path,likes,comments})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deletePost = async(req, res) => {
    const { postID } = req.params

    if (!mongoose.Types.ObjectId.isValid(postID)) {
        return res.status(404).json({error: "Post doesn't exist"})
    }

    const post = await Post.findOneAndDelete({_id: postID})

    if (!post) {
        return res.status(404).json({error: "Post doesn't exist"})
    }

    res.status(200).json(post)
}

const updatePost = async (req, res) => {
    const { postID } = req.params

    if (!mongoose.Types.ObjectId.isValid(postID)) {
        return res.status(404).json({error: "Post doesn't exist"})
    }

    const post = await Post.findOneAndUpdate({_id: postID}, {
        ...req.body
    })

    if (!post) {
        return res.status(404).json({error: "Post doesn't exist"})
    }

    res.status(200).json(post)
}


module.exports = {
    getPosts,
    createPost,
    deletePost,
    updatePost
}
