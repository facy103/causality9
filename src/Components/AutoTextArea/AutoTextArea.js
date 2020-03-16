import React, { useState, forwardRef } from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  border-top: none;
  border-left: 0;
  border-right: 0;
  resize: none;
  color: ${props => props.color};
  margin-right: 0.5%;
  padding-right: 1.5%;
  background-color: #3b3c51;
  margin-top: ${props => (props.marginTop)};
  width: ${props => (props.width ? props.width : "50%")};
  font-size: 15px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: right;
  outline: none;
  box-shadow: none;
  overflow: hidden;
  height: 17px;

  &:focus {
    outline: none !important;
    box-shadow: none;
  }
`;

const AutoTextArea = props => {
  const textAreaRef = React.createRef();
  const autoSize = e => {

    textAreaRef.current.style.height = "0";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    if (props.getValueCallback) {
        props.getValueCallback(e.target.value);
    }
  };

  return (
    <StyledTextArea
      marginTop={props.marginTop}
      color={props.color}
      style={props.style}
      width={props.width}
      ref={textAreaRef}
      autoFocus
      placeholder={props.placeholder}
      autoComplete="off"
      onChange={e => {
        autoSize(e);
      }}
      onKeyDown={e => {
        props.onChange(e);
      }}
    />

  );
};

export default AutoTextArea;
