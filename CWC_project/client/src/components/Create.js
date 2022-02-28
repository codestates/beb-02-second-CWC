import React, { useRef, useState } from "react";
import fileImg from "../assets/create-insert-file.jpg";
import { Card, CardHeader, CardBody } from "reactstrap";
import "./Create.css";

const Create = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [chain, setChain] = useState("");
  const blockChainList = ["Ethereum", "Klaytn"];
  const ethereumTypeList = ["ERC-721", "ERC-1155"];
  const klaytnTypeList = ["KIP-17"];

  const fileUploader = useRef(null);

  const handleClick = (e) => {
    fileUploader.current.click();
  };

  const handleChange = (e) => {
    const maxSize = 100 * 1024 * 1024;

    if (e.target.files[0].size > maxSize) {
      alert("첨부파일 사이즈는 100MB 이내로 등록 가능합니다.");
    } else {
      //add file handler
      //console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="create__component">
      <div className="create__content">
        <Card>
          <CardHeader>
            <h2 className="create__title">Create New Item</h2>
            <div>
              Image, Video, Audio, or 3D Model
              <sup className="create__sup-red">*</sup>
            </div>
          </CardHeader>
          <CardBody>
            <div className="create__item-data-form">
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF. Max size: 100 MB
            </div>
            <div className="create__input-box">
              <div className="create__input-box-file" onClick={handleClick}>
                <img
                  src={file ? URL.createObjectURL(file) : fileImg}
                  alt="no img"
                  className={
                    file
                      ? "create__input-box-file-img-change"
                      : "create__input-box-file-img"
                  }
                />
                <input
                  type="file"
                  ref={fileUploader}
                  onChange={handleChange}
                  accept="image/*, audio/*, video/*"
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="create__item-element">
              <div className="create__element-label">
                Name<sup className="create__sup-red">*</sup>
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="create__element-input"
              />
            </div>

            <div className="create__item-element">
              <div className="create__element-label">External Link</div>
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="create__element-input"
              />
            </div>

            <div className="create__item-element">
              <div className="create__element-label">Description</div>
              <textarea
                className="create__element-input element-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="create__item-element">
              <div className="create__element-label">
                Block chain<sup className="create__sup-red">*</sup>
              </div>
              <select
                name="blockchain"
                value={chain}
                onChange={(e) => setChain(e.target.value)}
                className="create__element-input"
              >
                <option value=""> </option>
                {blockChainList.map((el, index) => {
                  return (
                    <option key={index} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="create__item-element">
              <div className="create__element-label">
                Type<sup className="create__sup-red">*</sup>
              </div>
              <select
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="create__element-input"
              >
                <option value=""> </option>
                {chain === "" ? (
                  <option value=""> </option>
                ) : chain === "Ethereum" ? (
                  ethereumTypeList.map((el, index) => {
                    return (
                      <option key={index} value={el}>
                        {el}
                      </option>
                    );
                  })
                ) : (
                  klaytnTypeList.map((el, index) => {
                    return (
                      <option key={index} value={el}>
                        {el}
                      </option>
                    );
                  })
                )}
              </select>
            </div>
            <div className="create__item-element">
              <input
                type="button"
                value="create"
                className="create__element-btn"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Create;
