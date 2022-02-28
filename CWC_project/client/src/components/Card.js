import { useState } from "react";
import eth from "../assets/eth.png";
import "../App.css";
import Modal from "./modal";

const Card = ({ nft, action, text }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Card">
      <img src={nft.image} alt="" />
      <div className="Card__details">
        <div className="Card__name">
          {nft.name}
          <div className="Card__id"> CryptoPunk #{nft.id} </div>
        </div>
        <div className="Card__priceContainer">
          <img src={eth} className="Card__ethImage" alt="" />
          <div className="Card__price">{nft.traits[0].value}</div>
        </div>
        <div className="Card__button">
          <button className="Card__button__detail" onClick={openModal}>
            Details
          </button>
          <Modal open={modalOpen} close={closeModal} header="Detail">
            contract Adress : {nft.contractAddress}
            <br></br>
            tokenID : {nft.tokenID}
            <br></br>
            Token Standard : {nft.tokenStandard}
            <br></br>
            blockchain : {nft.blockchain}
          </Modal>
          <button className="Card__button__action" onClick={action()}>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
