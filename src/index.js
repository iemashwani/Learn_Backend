// require("dotenv").config({ path: "./.env" });

import dotenv from "dotenv";

import connectDB from "./database/index.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT || 8000}`);
    })
  })
  .catch((err) => {
    console.log("MONGODB connection failed ! ", err);
  });

/*
    import express from "express";
    const app = express();

    // function connectDB() {}
    // connectDB()

    (async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", (error) => {
        console.error("ERROR:", error);
        throw error;
        });
        app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
    })();
*/
