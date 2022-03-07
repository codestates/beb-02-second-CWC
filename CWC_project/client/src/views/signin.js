import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//1. 이메일 2. 유저 아이디 3. 비밀번호 비밀번호 확인 4. 지갑 생성

class Signup extends React.Component {
  constructor(props) {
    super(props);
//초기값
    this.state = {
      email: "",
      userName: "",
      pw: "",
      re_pw: "",
      emailCheck: "",
      userNameCheck: "",
      pwCheck: ""
    };
  }
  //이메일 인풋창 핸들링
  handleEmail = e => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
    console.log("handle email processed...")
  };
  //이메일 중복검사
  checkEmail = e => {
    e.preventDefault();

    //이메일 유효성 검사

    // 가능한 문자 검사
    const chkEmail = function(str) {
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return regExp.test(str) ? true : false;
    };
    //email 값?
    const inputEmail = {
      email: this.state.email

    };

    //email 등록
    // const email_info = {
    //   method: "POST",
    //   body: JSON.stringify(inputEmail),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // };

    //이메일 유효성검사

    if (chkEmail(this.state.email) === false) {
      alert("이메일 형식이 유효하지 않습니다.");
      this.setState({
        email: ""
      });
    }
     else {
      fetch("http://localhost:3000/user/email", email_info)
        .then(res => res.json())
        .then(json => {
          if (json === true) {
            alert("사용가능 한 아이디입니다");
            this.setState({
              emailCheck: this.state.email
            });
          } else {
            alert("이미 존재하는 아이디입니다");
          }
        });
    }
  };


  //유저이름 핸들링

  handleusername = e => {
    e.preventDefault();
    this.setState({
      userName: e.target.value
    });
  };

  //중복검사
  checkuserName = e => {
    e.preventDefault();
    const chkuserName = function(str) {
      var regNm = /^[가-힣]{2,15}|[a-zA-Z]{2,15}\s[a-zA-Z]{2,15}$/;
      return regNm.test(str) ? true : false;
    };
    const inputuserName = {
      userName: this.state.userName
    };

    // 체크하기?
    const userName_info = {
      method: "POST",
      body: JSON.stringify(inputuserName),
      headers: {
        "Content-Type": "application/json"
      }
    };
    if (chkuserName(this.state.userName) === false) {
      alert("한글,영문 대소문자 2~15자리만 사용 가능합니다");
    } else {
      fetch("http://localhost:3000/user/user", userName_info)
        .then(res => res.json())
        .then(json => {
          if (json === true) {
            alert("사용 가능한 닉네임입니다.");
            this.setState({
              userNameCheck: this.state.userName
            });
          } else {
            alert("이미 존재하는 닉네임입니다.");
          }
        });
    }
  };
  //첫번째 패스워드 입력창 set변환
  handlePW = e => {
    e.preventDefault();
    console.log("password:" ,e.target.value)
    this.setState({
      pw: e.target.value
    });
  };
  //두번째 패스워드 입력창 set변환
  handleRE_PW = e => {
    e.preventDefault();
    this.setState({
      re_pw: e.target.value
    });
  };
  //첫번 째 두번 째 패스워드 일치 확인
  checkPW = e => {
    e.preventDefault();
    //비밀번호 유효성검사(영문,숫자 혼합 6~20)
    const chkPwd = function(str) {
      var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
      return !reg_pwd.test(str) ? false : true;
    };
    if (chkPwd(this.state.re_pw) === false) {
      alert("영문,숫자를 혼합하여 6~12자 이내");
      this.setState({
        pw: "",
        re_pw: ""
      });
    } else {
      if (this.state.pw === this.state.re_pw) {
        alert("일치합니다.");
        this.setState({
          pwCheck: this.state.re_pw
        });
      } else {
        alert("불일치합니다.");
      }
    }
  };
  //서버로 가입 양식 제출
  handleSubmit = e => {
    e.preventDefault();
    console.log("email: ", this.state.email, "password: ", this.state.pw)
    const {
      email,
      emailCheck,
      userName,
      userNameCheck,
      pwCheck,
      pw,
      re_pw
    } = this.state;
    const signupInfo = {
      email: this.state.emailCheck,
      pw: this.state.pwCheck,
      userName: this.state.userNameCheck
    };
    const signup_info = {
      method: "POST",
      body: JSON.stringify(signupInfo),
      headers: {
        "Content-Type": "application/json"
      }
    };
    if (
      email &&
      userName &&
      pw &&
      re_pw &&
      email === emailCheck &&
      userName === userNameCheck &&
      pw === re_pw &&
      re_pw === pwCheck
    ) {
      fetch("http://localhost:3000/user", signup_info)
        .then(alert("가입이 완료되었습니다."))
        .then(this.props.history.push("/login"));
    } else {
      alert("입력값을 확인해주세요");
    }
  };
  render() {
    return (
      <div>
        <h1>Signup</h1>
        <br />
        <div>
          {/* <Route handleEmail={this.handleEmail}
            checkEmail={this.checkEmail}
            value={this.state.email}
          /> */}
          

          Email : <input className="email" type='text' placeholder='email' name='email' onChange={this.handleEmail}/>
      
          <br></br>
          Password : <input className="password" type='password' placeholder='password' name='password' onChange={this.handlePW}/>
          <br></br>
          Password check : <input type='password' placeholder='repassword' name='repassword' onChange={this.checkPW}/>



          {/* <username
            handleusername={this.handleusername}
            checkusername={this.checkusername}
            value={this.state.username}
          />
          <Password
            handlePW={this.handlePW}
            handleRE_PW={this.handleRE_PW}
            checkPW={this.checkPW}
            value1={this.state.pw}
            value2={this.state.re_pw}
          /> */}
          <div>
            <button onClick={this.handleSubmit}>가입하기</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
