import React, { useState, Fragment}  from 'react';
import "./Summary.css"
import SummaryImg from '../../images/summary.svg';
import Design from '../Design/Design.js';
import styled from "styled-components";
import {textTransform} from '../../mytools.js';

const separator = {
    marginTop: '30px',
    backgroundColor: '#606373',
    height: 1
}

const oneWish = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:'6px'
}

const arrowContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '13px',
    padding:'6px'
}

const PromptStyle = styled.div`
    font-size: 15px;
    text-align: center;
          width: 100%;
          background-color: #3B3C51;

    margin: auto;
    margin-top: 30px;
    margin-bottom: 7.5px;
    padding: 20px 60px 20px 60px;
    border-radius: 20px;
    width: fit-content;
    color: white;
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    opacity: ${props => (props.answered ? "0.5" : "1" )};
    position: relative;
    width: 220px;
 
  `

const RenderWishDB=(DB,totalIdx) => {
    return (
        <Fragment>
        <div>
            על פי תשובותיך עד כה:
        </div>
         <br></br>
  
         {DB.map((wish, idx) =>
        {
            if ( idx > 0 && idx < DB.length) 
            {
             return (
                    <div key={idx+totalIdx}>
                       <div style={arrowContainer}>
                          <div style={{minWidth:'30px'}}></div>
                          <div ><i  className="fas fa-long-arrow-alt-down innerArrow fa-2x"></i></div>
                          <div>נובע מ </div>
                       </div>
                        <div style={oneWish}>
                            <div style={{fontSize:'13px'}}>הרצון:</div>
                            <div className='innerWish'>{wish}</div>
                            <div style={{minWidth:'30px'}}></div>
                        </div>
                    </div>
             )}
         else
             {
                return (
                    <div key={idx+totalIdx}>
                          <div style={oneWish}>
                            <div style={{fontSize:'13px'}}>הרצון:</div>
                            <div className='innerWish'>{wish}</div>
                            <div style={{minWidth:'20px'}}></div>
                        </div>
                    </div>)
            }
          }
   
      
    )}
    </Fragment>
        )
}

const SummaryInner = ( props ) => {
    const wishDB = [...props.wishDB] ;
    const [answered, setAnswerState] = useState(false);
    const obj = props.obj;
    const terminalOutput = props.terminalOutput;

    return (
        <PromptStyle answered={answered}>
                     <img style={{position: 'absolute', right: '10%', top:'9.5%'}} src={SummaryImg} alt="SummaryImg" />
                     <span style={{margin:'auto', padding:'20px'}}>
                     <Design path={props.path} questionCount={props.questionCount} 
                        botMessege={textTransform(terminalOutput, obj, props.h1, true)}/>
                     </span>
           
                        {RenderWishDB(wishDB, props.index)}
             <div style={separator}></div>
            <div className='clickableTextContainer'>
            {answered ?
                    <button 
                                              className="clickableText">
                                                  <i className="fas fa-chevron-down fa-3x"></i>
                    </button> :
                 <button onClick={ ()=> { props.setNextStep('a')
                            setAnswerState(true);
                         }}
                                                  className="clickableText">
                                                      <i className="fas fa-chevron-down fa-3x"></i>
                        </button>
                    
                }
                
            </div>
           
        </PromptStyle>

    )
}

export default SummaryInner;