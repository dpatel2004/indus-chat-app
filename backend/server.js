import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000',
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res) => {
//     //root route http://localhost:5000/
//     res.send("Hello World!!");
// });


app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});