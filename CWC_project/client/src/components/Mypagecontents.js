import "../views/mypage.css";
import Dummy from "./dummy";
import Card from "./Card";

function Mypagecontents() {
  const sale = () => {
    <div>{console.log("sale 버튼이 눌렸습니다.")}</div>;
  };

  return (
    <div id="MypageContents">
      {Dummy.map((nft, idx) => {
        return <Card nft={nft} key={idx} action={() => sale} text="Sale" />;
      })}
    </div>
  );
}

// function Mypagecontents() {
//   return (
//     <div id="MypageContents">
//       <NftList />
//     </div>
//   );
// }

export default Mypagecontents;
