import mongoose from "mongoose";
import 'dotenv/config';


const DBConnection = async () => {
    const DB_URL=process.env.DB_URL;
    try {
        await mongoose.connect(DB_URL);
        console.log("Database conneccted succesfully.");
    } catch (error) {
        console.error("error while connecting to the database", error.message);
    }
}

export default DBConnection;