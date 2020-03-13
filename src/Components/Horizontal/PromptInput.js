import React, {useState} from 'react';
import './Horizontal.css';
import Design from '../Design/Design.js';
import styled from 'styled-components';
import sendButton from '../../images/send.svg';
import PersonalNotesIcon from '../../images/editnote.svg';

const NotesIcon = styled.img`
    display: block;
     width: 20px;
     height: 20px;
     font-size: 20px;
`;

const StyledNoteArea = styled.textarea`
  border-top: none;
    border-left: 0;
    border-right: 0;
    resize: none;

    color: #A7AFCF;
    margin-right: 0.5%;
    padding-right: 1.5%;
    background-color: #3B3C51;
    margin-top: 2%;
    width: 200px;
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: right;
    outLine: none;
    box-shadow: none;
    overflow: hidden;

    height: ${props => props.height}px;
    display: block ;


    &:focus {
        outline: none !important;
        box-shadow: none;
    
    }`

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

const StyledTextArea = styled.textarea`
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
    width: 200px;
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: center;
    outLine: none;
    box-shadow: none;
    height: ${props => props.height+17}px;

    margin: 0 auto;
    margin-top: 25px;

    &:focus {
        outline: none !important;
        box-shadow: none;
    }
`;


const SendIcon = styled.img`
    padding-right: 10px;
    margin-top:${props => props.marginTop+28}px;
    width: 20px; 
    height: 20px;
    position: absolute;
`;

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
    const [noteHeight, setNoteHeight] = useState (17);

    const setTextBoundaries=()=> 
    {
        let mainTextAreaHeight = mainTextAreaRef.current.scrollHeight;
        if ( mainTextAreaHeight > textHeight+37 ) 
        { 
          setTextHeight(textHeight+17)
        }
    }

    const setBoundaries=(e)=> 
    {
        let textAreaHeight = textAreaRef.current?.scrollHeight;
        if ( textAreaHeight > noteHeight+4 ) 
        { 
          setNoteHeight(noteHeight+17)
        }
    }
    

    const clickSubmit=()=> {
        setLineColor(blue);
        setAnsweredState(true);
        props.txtSubmit(mainTextAreaRef.current.value, props.ph)
    }

    const txtSubmit = (e) => {
        setTextBoundaries();
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
            <NotesIcon src={PersonalNotesIcon} onClick={()=>setUserNote(!userNote)}/>
                <Design botMessege={props.botMessege} />

                {userNote ? 
                   <StyledNoteArea 
                       ref={textAreaRef}
                       height={noteHeight}
                       autoFocus 
                       placeholder={'הערות אישיות'} 
                       autoComplete="off" 
                       onChange={(e)=>{setBoundaries(e)}}>
                   </StyledNoteArea> : null}
                    
                    <StyledTextArea 
                        ref={mainTextAreaRef}
                        height={textHeight}
                        style={{...lineColor}}
                        autoFocus rows="1" placeholder={props.ph} autoComplete="off"
                        onChange={(event)=>{txtSubmit(event)}}>
                    </StyledTextArea>
           

                        {answered ? null
                        :
                        <SendIcon src={sendButton} 
                        marginTop={textHeight}
                        onClick={clickSubmit}
                        /> }
                   
                
       
            </BubbleStyle>
    )
}

export default PromptInput;