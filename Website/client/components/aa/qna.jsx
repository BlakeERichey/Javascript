import React from 'react';
import {BasicInputRow, BasicInput, BasicButton} from '/imports/ui/input.jsx';
import {getAnswer} from '/imports/functions/nli.js'

class Qna extends React.Component{
  constructor(){super();}

  render(){
    return(
      <div>
        <label>First Name</label>
        <BasicInput onChange={() => console.log()}/>
        <label>Middle Name</label>
        <BasicInput onChange={() => console.log()}/>
        <label>Last Name</label>
        <BasicInput onChange={() => console.log()}/>
        <label>Address</label>
        <BasicInput onChange={() => console.log()}/>
        <label>County</label>
        <BasicInput onChange={() => console.log()}/>
        <label>Zip Code</label>
        <BasicInput onChange={() => console.log()}/>
        <label>Phone Number</label>
        <BasicInput onChange={() => console.log()}/>
        <label>Email</label>
        <BasicInput onChange={() => console.log()}/>
        <label>What skill do you have</label>
        <BasicInput onChange={() => console.log()}/>
        <label>Where do you work?</label>
        <BasicInput onChange={() => console.log()}/>
        <label>What is your job title?</label>
        <BasicInput onChange={() => console.log()}/>
        <br/>
        <br/>
        <label>What are you areas of expertise, skills, or relevant courses?</label>
        <BasicInput onChange={() => console.log()}/>
        <br/>
        <br/>
      </div>
    )
  }
}
export default Qna;