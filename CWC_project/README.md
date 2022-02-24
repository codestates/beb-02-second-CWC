**Notice : Board 게시판을 사용하려면 DB를 만들어야함.


***Database 사용법

mysql 콘솔창으로 들어가서

데이터베이스 만들고
`$ CREATE DATABASE board;`

테이블만들기 (데이터베이스 스키마)
```javascript
CREATE TABLE board(
idx INT(10) NOT NULL AUTO_INCREMENT,
title CHAR(100) NOT NULL,
content TEXT NOT NULL,
PRIMARY KEY(idx)
);
```

서버에 index.js 파일에서 ""안에 본인 mysql passoword 넣기
```javascript
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",    
    database: "board"
});
```
