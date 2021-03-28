import React from 'react';


const Instruction = ({ instructions }) => {
  console.log(instructions) 

  const regexA = /[.:]/g;
  const regexB = /[)]/g;
  const A = instructions.replace(regexA, '<br />');
  const B = A.replace(regexB, ' : ');
  
  function createMarkup() {
    return {__html: B};
  }


  return (
  <ul className="detail-instruction--list">
    <h1 className="detail-instruction--title">Instructions</h1>
        <li className="detail-instruction--detail">
          <span  className="detail-instruction--text" dangerouslySetInnerHTML={createMarkup()} />
         
        </li>
    
  </ul>
)};


export default Instruction;
