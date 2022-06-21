require("dotenv").config();

// NodeJs Core modules
const path = require("path");

// External Libraries
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

const PORT = 5000;

// Initializing the app
const app = express();

// Connecting to a loca instance of mongodb
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// Settingup various configrations in multer
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null,  file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Setting up various parsers to parse the request'
app.use(express.static(path.join(__dirname, "apps/admin/build")));
// app.use('/images', express.static(path.join(__dirname, "images")));
app.use('/images',express.static('images'));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "1mb" }));
// using multer to parse nultipart form data
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single("image"));


// Importing Routes
const routes = require("./routes/routes");

app.use(routes);


app.get("*", (req, res, next) => {
  console.log("Got landing page");
  res.sendFile(path.join(__dirname , "apps", "admin", "build", 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
