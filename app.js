require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const User = require("./models/User");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log(`MongoDB connected: ${mongoose.connection.host}`))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// Routes
app.use("/user", require("./routes/user"));

app.listen(PORT, () => {
  console.log(`Express server running at PORT: ${PORT}`);
});
