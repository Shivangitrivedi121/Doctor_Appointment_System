import express from 'express'
import { doctorList } from '../controllers/doctorController.js'

const doctorRouter = express.Router()

doctorRouter.get('/list', doctorList)

export default doctorRouter

// import express from 'express'
// import { doctorList, loginDoctor } from '../controllers/doctorController.js'

// const doctorRouter = express.Router()

// // doctor login route
// doctorRouter.post('/login', loginDoctor)

// // doctor list route
// doctorRouter.get('/list', doctorList)

// export default doctorRouter
