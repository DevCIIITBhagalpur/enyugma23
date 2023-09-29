const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT ;
const uri = process.env.DB_CONNECT;


async function run() {
    try {
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Terminate the application on database connection error
    }
}

run().catch(console.dir);

const userRoutes = require("./routes/user");

app.use(express.json());
app.use(cors());

// Routes Middleware
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
