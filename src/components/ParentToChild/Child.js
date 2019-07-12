import React, { Component } from "react";

const Child = props => {
  return (
    <div>
      <button onClick={props.buttonClick}>{props.title}</button>
    </div>
  );
};

export default Child;
