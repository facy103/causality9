import React, { useState, useEffect } from "react";
import "./Horizontal.css";
import Design from "../Design/Design.js";
import styled from "styled-components";
import sendButton from "../../images/send.svg";
import PersonalNotesIcon from "../../images/editnote.svg";
import AutoTextArea from "../AutoTextArea/AutoTextArea.js";

const NotesIcon = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  font-size: 20px;
  margin-right: -50px;
  margin-top: -10px;
`;

const BubbleStyle = styled.div`
  text-align: center;
  background-color: #3b3c51;
  margin: auto;
  margin-top: ${props => (props.blockDesign ? "5px" : "30px")};
  padding: 20px 60px 20px 60px;
  border-radius: 20px;
  width: fit-content;
  color: white;
  font-size: 15px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  opacity: ${props => (props.answered ? "0.5" : "1")};
  position: relative;

  @media (max-width: 400px) {
    width: 220px;
  }
`;

const SendIcon = styled.img`
  position: relative;
  margin-top: 20px;
  height: 20px;
  left: -5%;
`;

const PromptInput = props => {
  const [answered, setAnsweredState] = useState(false);
  const [userNote, setUserNote] = useState(false);
  const textAreaValue = React.useRef(null);

  const getTextAreaValue = newValue => {
    textAreaValue.current = newValue;
  };

  const clickSubmit = () => {
    setAnsweredState(true);
    if (textAreaValue.current === null) {
      props.txtSubmit(props.ph);
    } else props.txtSubmit(textAreaValue.current);
  };

  const txtSubmit = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      setAnsweredState(true);
      if (e.target.value === "") {
        e.target.value = props.ph;
      }
      props.txtSubmit(e.target.value);
    }
  };

  return (
    <BubbleStyle answered={answered} blockDesign={props.obj.blockDesign}>
      <NotesIcon
        src={PersonalNotesIcon}
        onClick={() => setUserNote(!userNote)}
      />
      <Design botMessege={props.botMessege} />

      {userNote ? (
        <AutoTextArea
          marginTop={"20px"}
          width={"200px"}
          color={"#A7AFCF"}
          placeholder={"הערות אישיות"}
          onChange={e => {}}
        />
      ) : null}

      <div style={{position:'relative',display:'flex'}}>
        <AutoTextArea
          getValueCallback={getTextAreaValue}
          marginTop={"20px"}
          width={"200px"}
          color={"white"}
          placeholder={props.ph}
          onChange={event => {
            txtSubmit(event);
            props.onChange(event);
          }}
        />

        {answered ? null : <SendIcon src={sendButton} onClick={clickSubmit} />}
      </div>
    </BubbleStyle>
  );
};

export default PromptInput;
