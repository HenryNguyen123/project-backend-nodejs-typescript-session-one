const express = require('express')
// import Router = require("express")
import type e = require("express")
// const app = express()
const router = express.Router();
const uploadImage = require("../Middleware/muterFile")

const userController = require("../controllers/userController");
const authController = require('../controllers/authController')
const JWTController = require('../controllers/JWTController')

const initApiRouter = (app: e.Express) => {
    router.get('/api/v1/users/read', userController.readUser)
    router.post('/api/v1/users/create', uploadImage.single('avatar'), userController.createUser)
    router.put('/api/v1/users/update/:id', uploadImage.single('avatar'), userController.updateUser)
    router.delete('/api/v1/users/delete/:id', userController.deleteUser)

    router.get('/api/v1/users/read/:id', userController.readUserById)
    
    router.post('/api/v1/auth/login', authController.loginAuth)

    router.post('/api/v1/auth/remove-jwt', JWTController.destroy)


    return app.use('/', router)
}

export = initApiRouter
// export = router