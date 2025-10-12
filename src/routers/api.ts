const express = require('express')
// import Router = require("express")
import type e = require("express")
// const app = express()
const router = express.Router();

const userController = require("../controllers/userController");


const initApiRouter = (app: e.Express) => {
    router.get('/api/v1/users/read', userController.readUser)
    router.post('/api/v1/users/create', userController.createUser)
    router.put('/api/v1/users/update/:id', userController.readUser)
    router.delete('/api/v1/users/delete/:id', userController.readUser)

    return app.use('/', router)
}

export = initApiRouter
// export = router