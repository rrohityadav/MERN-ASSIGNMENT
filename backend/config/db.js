import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' })


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        return 'MongoDB connected successfully'
    } catch (error) {
        throw new Error('Database connection failed. Please try again later.');
    }
};
