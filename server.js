const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5500;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/workplan", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

require("./routes/workPlans")(app);
require("./routes/excerciseroutes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });