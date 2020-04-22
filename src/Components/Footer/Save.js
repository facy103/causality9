import React from "react";
import { saveAs } from "file-saver";
import ReactFileReader from "react-file-reader";

const Save = (props) => {
  const saveHandler = () => {
    var myJSON = JSON.stringify(props.dialogeStore);
    var blob = new Blob([myJSON], { type: "text/plain;charset=utf-8" });
    saveAs(blob, props.dialogeStore[1]?.answer);
  };

  const handleFiles = files => {
    console.log(files.fileList)
  }
 
  const styled = {
    padding: "5px",
  };
  return (
    <div style={styled}>
      <button id="myBtnId2" onClick={saveHandler} type="button">
        <i className="far fa-save icon-4x fa-2x"></i>
      </button>

      <ReactFileReader fileTypes={[".txt"]} base64={true} handleFiles={handleFiles}>
      <button id="myBtnId2" className='btn'>Restore</button>
      </ReactFileReader>
    </div>
  );
};

export default Save;
