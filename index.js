import dotenv from "dotenv";
import connectToDB from "./src/db/dbConnect.js";
import app from "./src/app.js";

dotenv.config({
    path: "./.env" // if giving prob try "./.env"
});

connectToDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on: ${process.env.PORT}`);
        });
    })
    .catch((error) => console.log("MONGODB connection failed!!!: ", error));

// import express from "express";

// const app = express();

// app.listen(process.env.PORT, () => {
//     console.log(`Server is listening on: ${process.env.PORT}`);
// });

// app.get("/", (req, res) => {
//     res.send("hello");
// });

// export default app;
