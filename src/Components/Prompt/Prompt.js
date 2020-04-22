import React, { useState } from "react";
import "./Prompt.css";
import Design from "../Design/Design.js";
import styled from "styled-components";
import PersonalNotesIcon from "../../images/editnote.svg";
import AutoTextArea from "../AutoTextArea/AutoTextArea.js";

const BubbleDesign = styled.div`
  font-size: 15px;
  text-align: center;
  background-color: #3b3c51;
  margin: auto;
  margin-top: ${(props) => (props.blockDesign ? "-149px" : "30px")};
  margin-bottom:150px;
  top: 300px;

  padding: 20px 60px 20px 60px;
  border-radius: 20px;
  width: fit-content;
  color: white;
  font-size: 15px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  opacity: ${(props) => (props.answered ? "0.5" : "1")};
  @media (max-width: 400px) {
    width: 220px;
  }
`;

const NotesIcon = styled.img`
  display: block;
  height: 18px;
  font-size: 20px;
  margin-right: -50px;
  margin-top: -10px;
  padding: 5px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
     }
`;

const Prompt = (props) => {
  const [answered, setAnswerState] = useState(false);
  const [btnChoice, getBtnChoice] = useState(null);
  const [userNote, setUserNote] = useState(false);
  const obj = props.obj;
  return (
    <BubbleDesign answered={answered} blockDesign={props.obj.blockDesign}>
      <NotesIcon
        src={PersonalNotesIcon}
        onClick={() => setUserNote(!userNote)}
      />
      {/* message */}
      <div style={{ marginTop: "0px" }}>
        <Design
          path={props.path}
          questionCount={props.questionCount}
          obj={obj}
          botMessege={props.botMessege}
        />
      </div>
      {userNote ? (
        <AutoTextArea
          width={"200px"}
          color={"#A7AFCF"}
          onChange={(e) => {}}
          onKeyDown={(e) => {}}
          placeholder={"הערות אישיות"}
        />
      ) : null}
      {/* //Buttons */}
      <div className="clickableTextContainer">
        {answered
          ? Object.keys(obj.buttons).map((btnId, idx) => {
              if (btnId === btnChoice) {
                return (
                    <div style={{padding:'0px 10px 0px 10px'}}>
                  <button key={idx} className="chosenButton">
                    {obj.buttons[btnId]}
                  </button>
                  </div>
                );
              } else {
                return (
                    <div style={{padding:'0px 10px 0px 10px'}}>
                  <button key={idx} className="notChosenButton">
                    {obj.buttons[btnId]}
                  </button>
                  </div>
                );
              }
            })
          : Object.keys(obj.buttons).map((btnId, idx) => {
              return (
                  <div style={{padding:'0px 10px 0px 10px'}}>
                <button 
                  key={idx}
                  onClick={() => {
                    props.setNextStep(btnId);
                    getBtnChoice(btnId);
                    setAnswerState(true);
                  }}
                  className="clickableText"
                >
                  {obj.buttons[btnId]}
                </button>
                </div>
              );
            })}
      </div>
    </BubbleDesign>
  );
};

export default Prompt;
