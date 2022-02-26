import "./Home.css";
import Mypage from "../views/Mypage";

function Home() {
    return (
    <div>
    <div className="home-container">     
        <div className="h1-gradient"></div>
        <span class="dot"></span>
        <div className="small_text">Web2.0</div>
        <div className="team-paragrph">
            Buy NFTs with CWC Token.
         </div>  
        <div className="mypage-css">
            <Mypage />
        </div>     
    </div> 

    <div className="homepage">
      <div className="home-text">CWC</div>
         <div className="home-paragrph">
            CWC is an incentive token-based community.
            Web2.0 기반 커뮤니티 사이트의 아키텍처를 기반으로 
            인센티브 시스템의 동작 원리, ERC-20 스마트 컨트랙트,이해한 뒤 
            새로운 형태의 함수와 서버기반 지갑 서비스를 구현한 서비스입니다.
         </div>
    </div>  

     {/* <div className="homepage-image">
      <div className="team-text">Hello World,</div>
      
    </div>     */}
    
    </div>  
 

    
       
    );
  }
  
  export default Home;
  