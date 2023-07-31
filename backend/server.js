const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("../middleware/errorMiddleware");

dotenv.config();
connectDB();
// app.use(notFound);
// app.use(errorHandler);
app.use(express.json());

app.use(cors({ origin: "http://localhost:5000" }));

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/user", userRoutes);
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   res.setHeader(
//     "Access-Control-Allow-Headers",

//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );

//   res.setHeader(
//     "Access-Control-Allow-Methods",

//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );

//   next();
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on Port ${PORT}`.yellow.bold));
