import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL || '';
const connectDB = async() => {
    try {
        await mongoose.connect(MONGO_URL, {
        })
        console.log('database connected.');
    } catch (err) {
        console.log(`${err} connection failed.`)
    }
}

export default connectDB;