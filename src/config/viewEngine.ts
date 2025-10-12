import type e = require("express")

const express = require('express')
const path = require('path')
const app = express()

// View Engine Setup
const configViewEngine = (app: e.Express) => {
    app.use(express.static('./src/public'));
    app.set('views', path.join(__dirname, 'src/views'))
    app.set('view engine', 'ejs')
}

export = configViewEngine