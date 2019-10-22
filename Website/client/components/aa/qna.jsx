import React from 'react';
import {BasicInputRow, BasicInput, BasicSingleSelect} from '/imports/ui/input.jsx';

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
      </div>
    )
  }
}
export default Qna;