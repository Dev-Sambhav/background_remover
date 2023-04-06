import { useState } from "react";

import "./Remover.css";
import remover_logo from "../images/remover_logo.png";
const Remover = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (e) => {
    let file = e.target.files[0]; // it will return only first selected file
    console.log(file);
    setSelectedFile(file)
  };
  return (
    <div className="container">
      <div className="remover_container">
        <img src={remover_logo} alt="logo" className="remover_logo" />
        <form className="info_container">
          <label className="info_text">Select a File</label>
          <input
            type="file"
            onChange={handleFileInputChange}
            required
          />
          <button type="button" className="btn btn_upload">
            Upload
          </button>
        </form>
        <button className="btn btn_download">Download</button>
      </div>
    </div>
  );
};
export default Remover;
