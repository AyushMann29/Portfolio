// Tree.js
import React from "react";
import "./tree.css";

const Tree = ({ icon: Icon, link }) => {
  return (
    <div className="Tree">
      <div className="trunk"></div>
      <div className="leaves">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Icon className="tree-icon" />
        </a>
      </div>
    </div>
  );
};

export default Tree;
