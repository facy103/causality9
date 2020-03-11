import React, { useState, useEffect} from 'react';
import './Prompt.css';
import Design from '../Design/Design.js';
import styled from 'styled-components';
import PersonalNotesIcon from '../../images/editnote.svg';

const BubbleDesign = styled.div`
    font-size: 15px;
    text-align: center;
    background-color: #3B3C51;
    margin: auto;
    margin-top: ${props => props.blockDesign ? '1px' : '30px'};
    padding: 20px !important;
    border-radius: 20px;
    width: fit-content;
    color: white;
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  `;

const NotesIcon = styled.img`
    display: block;
     width: 20px;
     height: 20px;
     font-size: 20px;
`;

const StyledTextArea = styled.textarea`

    border-top: none;
    border-left: 0;
    border-right: 0;
    resize: none;

    color: #A7AFCF;
    margin-right: 0.5%;
    padding-right: 1.5%;
    background-color: #3B3C51;
    margin-top: 2%;
    width: 90%;
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: right;
    outLine: none;
    box-shadow: none;
    overflow: hidden;
    word-break: break-all;
    height: ${props => props.height}px;


    &:focus {
        outline: none !important;
        box-shadow: none;
    }
`;

const Prompt=(props) => {

    const textAreaRef = React.createRef();
    const [alreadyAnswered, setAnswerState] = useState(false);
    const [btnChoice, getBtnChoice] = useState(null);
    const [userNote, setUserNote] = useState(false);
    const [noteHeight, setNoteHeight] = useState (17);
    
    const setBoundaries=(e)=> 
    {
        let textAreaHeight = textAreaRef.current?.scrollHeight;
        if ( textAreaHeight > noteHeight+4 ) 
        { 
          setNoteHeight(noteHeight+17)
        }
   
     
    }


    const obj = props.obj;
        return (
                <BubbleDesign blockDesign={props.obj.blockDesign}>
                <NotesIcon src={PersonalNotesIcon} onClick={()=>setUserNote(!userNote)}/>
                {/* message */}
                <div style={{marginTop:'0px'}}>
                    <Design path={props.path} 
                            questionCount={props.questionCount} 
                            obj={obj}
                            botMessege={props.botMessege}/>
                </div>

                {userNote ? 
                   <StyledTextArea 
                       ref={textAreaRef}
                       height={noteHeight}
                       autoFocus 
                    //    rows={noteHeight} 
                       placeholder={'הערות אישיות'} 
                       autoComplete="off" 
                       onKeyPress={(e)=>{setBoundaries(e)}}>
                   </StyledTextArea> : null}


                {/* //Buttons */}
                <div className='clickableTextContainer'>
                {alreadyAnswered ?
                    Object.keys(obj.buttons).map( (btnId, idx) => 
                    {
                        if ( btnId === btnChoice ) {
                        return <button key = {idx} className='chosenButton'>{obj.buttons[btnId]}</button>
                        } else 
                        {
                        return <button key = {idx}  className='notChosenButton'>{obj.buttons[btnId]}</button>
                        }
                    }):
                    Object.keys(obj.buttons).map( (btnId, idx) => {
                        return <button key={idx} onClick={ ()=> { props.setNextStep(btnId)
                            getBtnChoice(btnId);
                            setAnswerState(true);
     
                         }}
                        className="clickableText">
                        {obj.buttons[btnId]}
                        </button>
                    })
                }
                </div>
            </BubbleDesign>
    )
}

   
export default Prompt;