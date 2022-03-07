import "../App.css";
import Dummy from "./dummy";
import Card from "./Card";

function dummycontents() {
  return (
    <div id="Contents">
      {Dummy.map((nft, idx) => {
        return <Card nft={nft} key={idx} action={() => {}} text="Sale" />;
      })}
    </div>
  );
}

export default dummycontents;
