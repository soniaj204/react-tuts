import React, { Component } from "react";
import Child from "./Child";

const Parent = (props) => {
  return (
    <div>
      <Child buttonClick={props.buttonClickEvent1} title={props.title} />
      <Child buttonClick={props.buttonClickEvent2} title={props.title} />
    </div>
  );
};

export default Parent;
