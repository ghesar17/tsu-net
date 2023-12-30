const express = require('express');

const {
    createPost,
    getPosts,
    updatePost,
    deletePost,
} = require('../controllers/postController')

const router = express.Router();

// GET all posts of user
router.get('/:id',getPosts)

// POST a new post
router.post('/:id',createPost)

// DELETE a post
router.delete('/:id',deletePost)

// UPDATE a post
router.patch('/:id',updatePost)

module.exports = router