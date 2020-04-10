import React, { useState, useEffect } from 'react';
import { Motion, spring } from 'react-motion';
import './style.css';
import Footer from "./Components/Footer/Footer.js"
import Prompt from "./Components/Prompt/Prompt.js"
import PromptInput from "./Components/Horizontal/PromptInput.js"
import SummaryInner from "./Components/Prompts/SummaryInner.js"
import questions from './DB/perfectDB.js';
// import questions from './DB/causality.js';
import { findTitle, textTransform } from './mytools.js';

let questionCount = 0;
let wishDB = [];
let dialogeStore = [];

const chatDivRef = React.createRef();
const bottomOfScreen = React.createRef();

const App = () => {

  questions[0].question = textTransform(questions, questions[0], questions[0].question, false);
  const [terminalOutput, setTerminalOutput] = useState([questions[0]]);
  const [scrollTop, setScrollTop] = useState(0)

  const scrollBottom = () => {
    let chatDivHeight = chatDivRef.current?.scrollHeight;
    if (chatDivHeight > 0 && chatDivHeight !== scrollTop) {
      setScrollTop(chatDivHeight)
    }
  }

  const txtSubmit = (e) => {
    questions[questionCount].answer = e;
    dialogeStore.push(questions[questionCount]);
    setNextStep();
  }

  const setIndex = (value) => {
    let currentQ = questions[questionCount];

    if ("wishDBUpdate" in currentQ) {
      wishDB.push(questions[questionCount].answer);
    }

      if ("swap" in questions[questionCount]) {
        for (let swapRef in questions[questionCount].swap) {
          var swapObj = questions[questionCount].swap;
          var sourceValue = findTitle(questions, swapRef);
          var targetValue = findTitle(questions, swapObj[swapRef]);
          questions[sourceValue].answer = questions[targetValue].answer;
        }
      }
    

    if ("clear" in currentQ) {
      window.location.reload(false);
    }

    if ('goto' in currentQ) {
      questionCount = findTitle(questions, currentQ.goto);
      return;
    }

    if ('next' in currentQ) {
      questionCount = findTitle(questions, currentQ.next[value]);
      return;
    }

    questionCount++;
  }

  const setNextStep = (value) => {
    let newOutput = [...terminalOutput];
    setIndex(value);
    let obj = questions[questionCount];
    let mirror = true;
    if (obj.mirror === false) { mirror = false; }
    newOutput.push({ ...obj });

    newOutput[newOutput.length - 1].question = textTransform(questions, obj, obj.question, mirror);
    setTimeout(() => { setTerminalOutput(newOutput) }, 700);
  }

  const generateStep = () => {
    let returnedObject = terminalOutput.map((obj, index) => {
      switch (obj.dialogeType) {
        case "prompt":
          return <Prompt
            key={index}
            index={index}
            botMessege={obj.question}
            setNextStep={(value) => setNextStep(value)}
            obj={obj}
            terminalOutput={terminalOutput}
          />
        case "horizontal":
          return <PromptInput
            key={index}
            index={index}
            botMessege={obj.question}
            txtSubmit={(e, ph) => txtSubmit(e, ph)}
            onChange={scrollBottom}
            ph={obj.placeholder}
            obj={obj}
            terminalOutput={terminalOutput}
          />
        case "summaryInner":
          return <SummaryInner
            key={index}
            index={index}
            botMessege={obj.question}
            h1={obj.h1}
            setNextStep={(value) => setNextStep(value)}
            wishDB={wishDB}
            obj={obj}
            terminalOutput={terminalOutput}
          />
        default:
          break;
      }
    })
    scrollBottom();
    return returnedObject
  }

  useEffect(() => {
    window.requestAnimationFrame(() => { // wait just a bit
      bottomOfScreen.current.scrollIntoView({ behavior: "smooth" }, [scrollTop])
    });
  })

  return (
    <div id="mypage">
      <div id="chatContainer">

        <div ref={chatDivRef} id="chatDiv">
          {generateStep()}
          <div ref={bottomOfScreen} style={{ backgroundColor: 'red', float: "left", clear: "both" }}></div>
        </div>
      </div>
      <Footer dialogeStore={dialogeStore}/>
    </div>
  )
}

export default App;