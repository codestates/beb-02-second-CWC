import dotenv from "dotenv";
import express from "express";
import mysql from "mysql";
import cors from "cors";

dotenv.config();

const password = process.env.DATABASE_SPRINT_PASSWORD;

const app = express();
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const PORT = process.env.port || 8000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: password,
  database: "cwcboard",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//update board taking data from a database
app.get("/api/get", (req, res) => {
  const sqlQuery = "SELECT * FROM cwcboard;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

//store all posts on a database
app.post("/api/insert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  // const user = req.body.username;
  const sqlQuery = "INSERT INTO cwcboard (title, content) VALUES (?,?)";
  db.query(sqlQuery, [title, content], (err, result) => {
    res.send("success!");
  });
});

// app.get("/", (req, res)=>{
//     const sqlQuery = "INSERT INTO cwcboard (title, content) VALUES ('hello cwc', 'first post')";
//     db.query(sqlQuery, (err, result)=>{
//         res.send('success!');
//     });
// })

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
