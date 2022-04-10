//Create a react app from scratch. There are two ways:
//Pre-ES6:
// var React = require("react");
// var ReactDOM = require("react-dom");
//Post-ES6:
import React from "react";
import ReactDOM from "react-dom";
//----------------------------------------------------------------------

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.render(
  <div>
    <h1>This is a Heading</h1>
    <ul>
      <li>First Item</li>
      <li>Second Item</li>
      <li>Third Item</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//-----------------------------------------------------------------------