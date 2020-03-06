import React, { useState} from 'react';
import './Prompt.css';
import Design from '../Design/Design.js';
import styled from 'styled-components';

const BubbleDesign = styled.div`
    font-size: 15px;
    text-align: center;
    flex: 0 1 42px;
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

const Prompt=(props) => {
    const [alreadyAnswered, setAnswerState] = useState(false);
    const [btnChoice, getBtnChoice] = useState(null);
    const obj = props.obj;
        return (
                <BubbleDesign blockDesign={props.obj.blockDesign}>
                       
                <Design path={props.path} 
                        questionCount={props.questionCount} 
                        obj={obj}
                        botMessege={props.botMessege}/>
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