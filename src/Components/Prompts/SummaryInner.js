import React, { useState, Fragment}  from 'react';
import "./Summary.css"
import SummaryImg from './summary.svg';
import Design from '../Design/Design.js';
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

const arrowText = {

}

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
                          <div style={arrowText}>נובע מ </div>
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
    const [alreadyAnswered, setAnswerState] = useState(false);
    const obj = props.obj;
    const terminalOutput = props.terminalOutput;

    return (
        <div className='prompt'>
                <div className='summaryContainer'>
                     <img src={SummaryImg} alt="SummaryImg" />
                     <span className='Summarytitle'>
                     <Design path={props.path} questionCount={props.questionCount} 
                        botMessege={textTransform(terminalOutput, obj, props.h1, true)}/>
                     </span>
                </div>
                        {RenderWishDB(wishDB, props.index)}
             <div style={separator}></div>
            <div className='clickableTextContainer'>
            {alreadyAnswered ?
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
           
        </div>

    )
}

export default SummaryInner;