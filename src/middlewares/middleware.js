/*
 * Class - Middleware
 */
'use strict'
const express = require('express')
const winston = require('../config/winston')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const imagesPath = path.join(__dirname, 'images').replace('/middlewares', '')

class Middleware {
    static initialize(app) {
        app.use(morgan('tiny', { stream: winston.infoStream }))
        app.use(bodyParser.json())
        app.use(function(req,res,next){setTimeout(next,5000)})
        app.use('/images', express.static(imagesPath))
        winston.info('Middlewares initialized.....')
    }
}

module.exports = Middleware
