import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'
import adminModel from './models/adminModel.js'
import bcrypt from 'bcrypt'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api end point
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

// admin initialization
const seedAdmin = async () => {
  try {
    const adminExists = await adminModel.findOne({ email: process.env.ADMIN_EMAIL })
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
      const newAdmin = new adminModel({
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword
      })
      await newAdmin.save()
      console.log('Admin seeded successfully')
    }
  } catch (error) {
    console.error('Error seeding admin:', error)
  }
}
seedAdmin()


app.get('/', (req, res) => {
  res.send('Api working...')
})

app.listen(port, () => console.log('Server started', port)) 