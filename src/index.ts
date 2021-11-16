import express from "express";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 80;

const app = express();

const location = process.cwd() + "\\www";

fs.mkdir(location, (err) => {
  if (err) {
    if (err.code !== "EEXIST") {
      console.error(err);
    }
  }
});

app.use(express.static(location));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
