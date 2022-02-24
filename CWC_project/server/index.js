const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 8000;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "fun",
    database: "cwcboard"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


//update board taking data from a database
app.get("/api/get", (req, res)=>{
    const sqlQuery = "SELECT * FROM cwcboard;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})


//store all posts on a database
app.post("/api/insert", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO cwcboard (title, content) VALUES (?,?)";
    db.query(sqlQuery, [title, content], (err, result) => {
        res.send('success!');
    });
});


// app.get("/", (req, res)=>{
//     const sqlQuery = "INSERT INTO cwcboard (title, content) VALUES ('hello cwc', 'first post')";
//     db.query(sqlQuery, (err, result)=>{
//         res.send('success!');
//     });
// })

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});