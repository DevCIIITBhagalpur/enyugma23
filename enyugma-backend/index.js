import express, { json } from "express";
import { config } from "dotenv";
// import { connect } from "mongoose";
const app = express();
import cors from "cors";
import db from "./db.js";
config();
const PORT = process.env.PORT ;
const uri = process.env.DB_CONNECT;


// async function run() {
//     try {
//         const conn = await connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to the database");
//     } catch (error) {
//         console.error("Error connecting to the database:", error);
//         process.exit(1); // Terminate the application on database connection error
//     }
// }

// run().catch(console.dir);

import userRoutes from "./routes/user";

app.use(json());
app.use(cors());

// Routes Middleware
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
