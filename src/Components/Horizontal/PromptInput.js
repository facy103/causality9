import React, {useState, useEffect} from 'react';
import './Horizontal.css';
import Design from '../Design/Design.js';
import styled from 'styled-components';
import sendButton from '../../images/send.svg';
import PersonalNotesIcon from '../../images/editnote.svg';
import AutoTextArea from '../AutoTextArea/AutoTextArea.js';

const NotesIcon = styled.img`
    display: block;
     width: 20px;
     height: 20px;
     font-size: 20px;
`;

const BubbleStyle = styled.div`
    text-align: center;
    background-color: #3B3C51;
    margin: auto;
    margin-top: ${props => props.blockDesign ? '1px' : '100px'};
    padding: 20px 40px 20px 40px;
    border-radius: 20px;
    width: fit-content;
    color: white;
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;


const SendIcon = styled.img`
    padding-right: 10px;
    margin-top:${props => props.marginTop+28}px;
    width: 20px; 
    height: 20px;
    position: relative;
`;

const StyledNoteArea = {
    'color': 'white',
    'backgroundColor': '#3B3C51',
    'marginTop': '2%',
    'width': '200px',
    'textAlign': 'center'
}

const PromptInput = (props) => {
    const green = {
        borderBottom: "solid 1px #5ECC74"
    }
    
    const blue = {
        borderBottom: "solid 1px #0491FF"
    }
    const mainTextAreaRef = React.createRef();
    const textAreaRef = React.createRef();
    const [textHeight, setTextHeight] = useState (0);
    const [lineColor, setLineColor] = useState(green);
    const [answered, setAnsweredState] = useState(false);
    const [userNote, setUserNote] = useState(false);

    const clickSubmit=()=> {
        setLineColor(blue);
        setAnsweredState(true);
        props.txtSubmit(mainTextAreaRef.current.value, props.ph)
    }

 

    const txtSubmit = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
        e.preventDefault();
        // setLineColor(blue);
        setAnsweredState(true);
        if (e.target.value==='') {e.target.value=props.ph};
        props.txtSubmit(e.target.value, props.ph)
    }
    }

    return (   
            <BubbleStyle blockDesign={props.obj.blockDesign}>
            <NotesIcon src={PersonalNotesIcon} onClick={()=>setUserNote(!userNote)}/>
                <Design botMessege={props.botMessege} />

                {userNote ? 
                   <AutoTextArea 
                       color={'#A7AFCF'}
                       placeholder={'הערות אישיות'} 
                       onChange={(e)=>{}}/> : null}
                    
                    <AutoTextArea 
                        width={'230px'}
                        color={'white'}
                        placeholder={props.ph} 
                        onChange={(event)=>{txtSubmit(event)
                            props.onChange(event)}}/>

                    {answered ? null :
                    <SendIcon 
                        src={sendButton} 
                        marginTop={textHeight}
                        onClick={clickSubmit}
                    /> }
            </BubbleStyle>
    )
}

export default PromptInput;