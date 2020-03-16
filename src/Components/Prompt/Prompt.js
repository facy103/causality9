import React, { useState, useEffect} from 'react';
import './Prompt.css';
import Design from '../Design/Design.js';
import styled from 'styled-components';
import PersonalNotesIcon from '../../images/editnote.svg';
import { getByDisplayValue } from '@testing-library/dom';
import AutoTextArea from '../AutoTextArea/AutoTextArea.js';

const BubbleDesign = styled.div`
    font-size: 15px;
    text-align: center;
    background-color: #3B3C51;
  
    margin: auto;
    margin-top: ${props => props.blockDesign ? '10px' : '10px'};
    padding: 20px 60px 20px 60px;
    border-radius: 20px;
    width: fit-content;
    color: white;
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    opacity: ${props => (props.answered ? "0.5" : "1" )};
    @media (max-width: 400px) {
        width: 330;
      }
  `;

const NotesIcon = styled.img`
    display: block;
     width: 20px;
     height: 20px;
     font-size: 20px;
     margin-right:-50px;
     margin-top:-10px;
`;


const Prompt=(props) => {
    const [answered, setAnswerState] = useState(false);
    const [btnChoice, getBtnChoice] = useState(null);
    const [userNote, setUserNote] = useState(false);
    const obj = props.obj;
        return (
                <BubbleDesign answered={answered} blockDesign={props.obj.blockDesign}>
                <NotesIcon src={PersonalNotesIcon} onClick={()=>setUserNote(!userNote)}/>
                {/* message */}
                <div style={{marginTop:'0px'}}>
                    <Design path={props.path} 
                            questionCount={props.questionCount} 
                            obj={obj}
                            botMessege={props.botMessege}/>
                </div>
                {userNote ? <AutoTextArea color={'#A7AFCF'} onChange={(e)=>{}} placeholder={'הערות אישיות'} /> : null}
                {/* //Buttons */}
                <div className='clickableTextContainer'>
                {answered ?
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