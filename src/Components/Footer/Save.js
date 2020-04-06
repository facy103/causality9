import React from 'react';

const Save = (props) => {
    const saveHandler = () => {
        console.log(props.dialogeStore);
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