import React from 'react';
import {BasicInputRow, BasicInput, BasicButton} from '/imports/ui/input.jsx';
import {getAnswer} from '/imports/functions/nli.js'

class Qna extends React.Component{
  constructor(){super();}

  render(){
    return(
      <div>
        <label>What are your hobbies?</label>
        <BasicInput onChange={() => console.log()}/>
        <label>What is your name?</label>
        <BasicInput onChange={() => console.log()}/>
        <label>What skills do you have?</label>
        <BasicInput onChange={() => console.log()}/>
        <label>How many years have you worked in this industry?</label>
        <BasicInput onChange={() => console.log()}/>
        <label>If you could be any animal, which would you choose?</label>
        <BasicInput onChange={() => console.log()}/>
        
        <BasicButton onClick={() => {
          console.log(getAnswer('How many years have you worked in this industry?'));
        }}/>
      
      </div>
    )
  }
}
export default Qna;