import React from 'react';

const Footer = () => {
  return (
    <>
      <hr />
      <footer>
        <h1>To-Do-List-With-Labels using React Hooks</h1>
        <ul>
          <li>Allow you to create listing of notes separated by labels</li>
          <li>Allow you to perform add, edit, delete operations through a note and a label</li>
          <li>Allow you to mark your notes as "Complete" or "Incomplete"</li>
          <li>Allow you to perform minimal checks to avoid redundancy in labels and notes</li>
          <li>Allow you to perform rigorous check to avoid submission of empty labels and notes</li>
          <li>Allow you to understand business logic in compliance with React Bootstrap</li>
          <li>Allow you to process editing of notes and labels through browser specific PROMPT dialogs</li>
          <li>Allow you to understand solution of multiple listing in a to-do application with prime focus on business logic and minimal overhead of styling</li>
        </ul>
        <h2>Further Actions</h2>
        <ul>
          <li>Fork this project and try to implement localStorage API which save existing notes and labels when window reload action takes place</li>
          <li>Fork this project and try to add your own custom styling rather than third-party framework like Bootstrap</li>
          <li>Fork this project and try to incorporate either styled components, css modules or other popular system</li>
          <li>Fork this project and try to convert Hooks into a Redux store</li>
          <li>Fork this project and try to replace Hooks with Context API</li>
          <li>Fork this project and try to replace React with Vue or Angular</li>
          <li>Fork this project and try to replace React with React Native or Electron</li>
          <li>Fork this project and try to find possible underlying bugs, if found, add TypeScript or similar architectures to make code clean and all props immutable</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;