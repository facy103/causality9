import React, {useState} from 'react';
import './Horizontal.css';
import Design from '../Design/Design.js';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
    flex: inherit;
    border-top: none;
    border-left: 0;
    border-right: 0;
    resize: none;
    /* padding: 10px; */
    color: white;
    margin-right: 0.5%;
    padding-right: 1.5%;
    margin-top: 15px;
    background-color: #3B3C51;
    /* margin-top: 2%; */
    width: 300px;
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

    const setBoundaries=(e)=> 
    {
        let textAreaHeight = textAreaRef.current.scrollHeight;
        console.log(textAreaHeight);
        if ( textAreaHeight > noteHeight+37 ) 
        { 
          setNoteHeight(noteHeight+17)
        }
    }


    const txtSubmit = (e) => {
        setBoundaries(e);
    if (e.keyCode === 13 && e.shiftKey === false) {
        e.preventDefault();
        setLineColor(blue);
        props.txtSubmit(e, props.ph)
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
            </BubbleStyle>
    )
}

export default PromptInput;