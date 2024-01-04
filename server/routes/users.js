const express = require('express');

const {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
} = require('../controllers/userController')

const router = express.Router();

router.get('/',getUsers)

router.get('/:user_name',getUser)

router.post('/',createUser)

router.delete('/:user_name',deleteUser)

router.patch('/:user_name',updateUser)

module.exports = router