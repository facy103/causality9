import React from 'react';
import { saveAs } from 'file-saver';

const Save = (props) => {
    const saveHandler = () => {
        console.log(props.dialogeStore);
        var myJSON = JSON.stringify(props.dialogeStore);
        var blob = new Blob([myJSON],
                { type: "text/plain;charset=utf-8" });
        saveAs(blob, props.dialogeStore[1]?.answer);
    }
    const styled = {
        padding: "5px",
    };
    return (
        <div style={styled}> 
            <button id="myBtnId2" 
            onClick={saveHandler}
            type="button"><i className="far fa-save icon-4x fa-2x"></i></button>
        </div>
    )
}

export default Save;