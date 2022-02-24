const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.port || 8000;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123",
    database: "simpleboard"
});

app.get("/", (req, res)=>{
    const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES ('hello cwc', 'first post')";
    db.query(sqlQuery, (err, result)=>{
        res.send('success!');
    });
})

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});