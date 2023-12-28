const express = require('express');

const {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
} = require('../controllers/userController')

const router = express.Router();

// GET all user
router.get('/',getUsers)

// GET a single user
router.get('/:id',getUser)

// POST a new user
router.post('/',createUser)

// DELETE a user
router.delete('/:id',deleteUser)

// UPDATE a user
router.patch('/:id',updateUser)

module.exports = router