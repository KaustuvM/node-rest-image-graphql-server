/*
 */
'use strict'
const process = require('./src/listeners/processListener.js')
const application = require('./app.js')
const express = require('express')
const app = express()


/*
 * Listen to the process events.
 */
process.listen()

/*
 * Run the application.
 */
application.run(app).then(r => console.log("KAUSTUV MUKHERJEE"))
