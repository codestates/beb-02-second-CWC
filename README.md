CWC(Centralized Web2.0 Community) 
<img width="1847" alt="Screen Shot 2022-03-04 at 8 29 13 PM" src="https://user-images.githubusercontent.com/62411918/156756080-4005ac04-f0b5-49be-ac4d-03975d22e374.png">

<img width="1375" alt="Screen Shot 2022-03-04 at 8 33 19 PM" src="https://user-images.githubusercontent.com/62411918/156756233-a8acf00d-76cd-4dd7-a9c4-d99eb1a505b2.png">


**Explore

<img width="1861" alt="Screen Shot 2022-03-04 at 8 29 27 PM" src="https://user-images.githubusercontent.com/62411918/156756024-1e78bb20-0a72-4ba1-a16a-5ef28445e0b4.png">



**게시판


<img width="1845" alt="Screen Shot 2022-03-04 at 8 28 34 PM" src="https://user-images.githubusercontent.com/62411918/156755957-1040a61b-ec72-4f17-9743-ae2ef29da413.png">




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
