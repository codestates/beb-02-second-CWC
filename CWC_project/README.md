<img width="1731" alt="Screen Shot 2022-02-25 at 6 44 45 PM" src="https://user-images.githubusercontent.com/62411918/155693909-c3e2c4df-292a-463f-b610-fdc01cc89576.png">

***Database 사용법

mysql 콘솔창으로 들어가서

데이터베이스 만들고
`$ CREATE DATABASE cwcboard;`

테이블만들기 (데이터베이스 스키마)
```javascript
CREATE TABLE cwcboard(
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
    database: "cwcboard"
});
```

**2/25 게시판 깨지는 부분 수정필요

<img width="1719" alt="Screen Shot 2022-02-25 at 6 44 49 PM" src="https://user-images.githubusercontent.com/62411918/155693897-94975589-e929-4f60-9913-c64d809ed525.png">

<img width="1731" alt="Screen Shot 2022-02-25 at 6 44 45 PM" src="https://user-images.githubusercontent.com/62411918/155693998-04b8f3af-de24-4203-9a72-05b5ab12bc55.png">
