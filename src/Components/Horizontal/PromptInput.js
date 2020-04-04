import React, { useState, useEffect } from "react";
import "./Horizontal.css";
import Design from "../Design/Design.js";
import styled from "styled-components";
import sendButton from "../../images/send.svg";
import PersonalNotesIcon from "../../images/editnote.svg";
import AutoTextArea from "../AutoTextArea/AutoTextArea.js";

const NotesIcon = styled.img`

display: block;
     height: 18px;
     font-size: 20px;
     margin-right:-50px;
     margin-top:-10px;
     padding: 5px;
     /* &:hover {
    background-color: #303142;
  } */
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
    /* width: 220px; */
  }
`;

const SendIcon = styled.img`

/* float:left;  */
/* display: block; */
position: absolute;
  padding: 5px;
 margin-top:-24px;
 margin-right:101px;
 height: 17px;
  width: 20px;
  &:hover {
    background-color: #303142;
  }
`;


const PromptInput = props => {
  const [answered, setAnsweredState] = useState(false);
  const [submitIcon, toggleSubmitIcon] = useState(false); // starts with false until start typing
  const [userNote, setUserNote] = useState(false);
  const textAreaValue = React.useRef(null);
  const getTextAreaValue = newValue => {
    textAreaValue.current = newValue;
  };


  const clickSubmit = () => {
    setAnsweredState(true);
    toggleSubmitIcon(false);
    if (textAreaValue.current === null) {
      props.txtSubmit(props.ph);
    } else props.txtSubmit(textAreaValue.current);
  };

  const txtSubmit = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      setAnsweredState(true);
      toggleSubmitIcon(false);
      if (e.target.value === "") {
        e.target.value = props.ph;
      }
      props.txtSubmit(e.target.value);
    }

  };

  const sendIconHandler = (e) => {
   if (e.target.value.length > 0) {toggleSubmitIcon(true)} else toggleSubmitIcon(false);
  }

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
          onKeyDown={e => {}}
        />
      ) : null}

      <div>
        <AutoTextArea
          getValueCallback={getTextAreaValue}
          marginTop={"20px"}
          width={"200px"}
          color={"white"}
          placeholder={props.ph}
          onKeyDown={event => {
            txtSubmit(event);
            props.onChange(event);
          }}
          onChange={e=>{sendIconHandler(e)}}
        />

          {submitIcon ? <SendIcon src={sendButton} onClick={clickSubmit}/> : null
          }

       
      </div>
    </BubbleStyle>
  );
};

export default PromptInput;
