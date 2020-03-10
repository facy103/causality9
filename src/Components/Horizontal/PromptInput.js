import React, {useState} from 'react';
import './Horizontal.css';
import Design from '../Design/Design.js';
import styled from 'styled-components';
import sendButton from '../../images/send.svg';

const StyledTextArea = styled.textarea`
    flex: inherit;
    border-top: none;
    border-left: 0;
    border-right: 0;
    resize: none;
    /* padding: 10px; */
    color: white;
    /* margin-right: 0.5%; */
    /* padding-right: 1.5%; */
    margin-top: 15px;
    background-color: #3B3C51;
    /* margin-top: 2%; */
    width: 270px;
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: center;
    outLine: none;
    box-shadow: none;
    height: ${props => props.height+17}px;

    &:focus {
        outline: none !important;
        box-shadow: none;
    }
`;

const BubbleStyle = styled.div`
    text-align: center;
    background-color: #3B3C51;
    margin: auto;
    margin-top: ${props => props.blockDesign ? '1px' : '30px'};
    padding: 20px;
    border-radius: 20px;
    width: fit-content;
    color: white;
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const SendIcon = styled.img`
    display: block;
     width: 5%; 
     height: 5%;
    float:left;
    margin-top:${props => props.marginTop+20}px;
`;

const PromptInput = (props) => {
    const green = {
        borderBottom: "solid 1px #5ECC74"
    }
    
    const blue = {
        borderBottom: "solid 1px #0491FF"
    }
    const textAreaRef = React.createRef();
    const [noteHeight, setNoteHeight] = useState (0);
    const [lineColor, setLineColor] = useState(green);
    const [answered, setAnsweredState] = useState(false);

    const setBoundaries=()=> 
    {
        let textAreaHeight = textAreaRef.current.scrollHeight;
        if ( textAreaHeight > noteHeight+37 ) 
        { 
          setNoteHeight(noteHeight+17)
        }
    }

    const clickSubmit=()=> {
        console.log(textAreaRef.current.value);
        setLineColor(blue);
        setAnsweredState(true);
        props.txtSubmit(textAreaRef.current.value, props.ph)
    }

    const txtSubmit = (e) => {
        setBoundaries();
    if (e.keyCode === 13 && e.shiftKey === false) {
        e.preventDefault();
        setLineColor(blue);
        setAnsweredState(true);
        if (e.target.value==='') {e.target.value=props.ph};
        props.txtSubmit(e.target.value, props.ph)
    }
    }

    return (   
            <BubbleStyle blockDesign={props.obj.blockDesign}>
                <Design botMessege={props.botMessege} />
                <StyledTextArea 
                    ref={textAreaRef}
                    height={noteHeight}
                    style={{...lineColor}}
                    autoFocus rows="1" placeholder={props.ph} autoComplete="off"
                    onKeyDown={(event)=>{txtSubmit(event)}}>
                </StyledTextArea>
                {answered ? null
                :
                 <SendIcon src={sendButton} 
                          marginTop={noteHeight}
                          onClick={clickSubmit}
                            /> }
                
            </BubbleStyle>
    )
}

export default PromptInput;