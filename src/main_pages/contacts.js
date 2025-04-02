import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Tree from './tree.js';

function Contacts() {
  return (
    <div className="contactSection">
      <div className="ground" />
      <div className="treeRow">
        <Tree icon={FaGithub} link="https://github.com/ayushmann29" />
        <Tree icon={FaLinkedin} link="https://linkedin.com/in/ayush-mann29" />
        <Tree icon={FaEnvelope} link="mailto:mannayush60@gmail.com" />
      </div>
      <p className="contactMessage">🌿 Let's connect and grow together!</p>
      <p className="contactTag">Let's connect 🌱</p>
    </div>
  );
}

export default Contacts;
