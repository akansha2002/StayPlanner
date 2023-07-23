import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth"
import usersRoute from "./routes/users"
import hotelsRoute from "./routes/hotels"
import roomsRoute from "./routes/rooms"

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch (error) {
        throw(error)
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mmongoDB disconnected");
})

mongoose.connection.on("connected", () => {
    console.log("mmongoDB connected");
})


// middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.")
})







