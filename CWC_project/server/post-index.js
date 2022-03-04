// //update board taking data from a database
// app.get("/api/get", (req, res)=>{
//     const sqlQuery = "SELECT * FROM cwcboard;";
//     db.query(sqlQuery, (err, result)=>{
//         res.send(result);
//     })
// })


// //store all posts on a database
// app.post("/api/insert", (req, res) => {
//     const title = req.body.title;
//     const content = req.body.content;
//     // const user = req.body.username;
//     const sqlQuery = "INSERT INTO cwcboard (title, content) VALUES (?,?)";
//     db.query(sqlQuery, [title, content], (err, result) => {
//         res.send('success!');
//     });
// });


// // app.get("/", (req, res)=>{
// //     const sqlQuery = "INSERT INTO cwcboard (title, content) VALUES ('hello cwc', 'first post')";
// //     db.query(sqlQuery, (err, result)=>{
// //         res.send('success!');
// //     });
// // })