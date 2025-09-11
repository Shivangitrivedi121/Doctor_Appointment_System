// import {v2 as cloudinary} from 'cloudinary'

// const connectCloudinary = async () => {
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET_KEY
//   })
// }

// export default connectCloudinary

import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // ✅ match .env
    api_key: process.env.CLOUDINARY_API_KEY,        // ✅ match .env
    api_secret: process.env.CLOUDINARY_API_SECRET   // ✅ match .env
  })
  console.log("✅ Cloudinary connected")
}

export default connectCloudinary
