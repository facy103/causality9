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
    padding: 10px;
    color: white;
    margin-right: 0.5%;
    padding-right: 1.5%;
    background-color: #3B3C51;
    margin-top: 2%;
    width: 300px;
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: center;
    outLine: none;
    box-shadow: none;

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

    const [lineColor, setLineColor] = useState(green);

        const txtSubmit = (e) => {
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
                    style={{...lineColor}}
                    autoFocus rows="1" placeholder={props.ph} autoComplete="off"
                    onKeyDown={(event)=>{txtSubmit(event)}}>
                </StyledTextArea>
            </BubbleStyle>
    )
}

export default PromptInput;