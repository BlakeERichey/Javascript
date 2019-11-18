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
        <label>What hobbies do you have?</label>
        <BasicInput onChange={() => console.log()}/>
        <label>What is your name?</label>
        <BasicInput onChange={() => console.log()}/>
        <label>What is your first name</label>
        <BasicInput onChange={() => console.log()}/>
        <label>What skills do you have?</label>
        <BasicInput onChange={() => console.log()}/>
        <label>What are your skills?</label>
        <BasicInput onChange={() => console.log()}/>
        <label>How many years have you worked in this industry?</label>
        <BasicInput onChange={() => console.log()}/>
        <label>If you could be any animal, which would you choose?</label>
        <BasicInput onChange={() => console.log()}/>
        
        <BasicButton text='Autofill' onClick={() => {
          let lbls = document.getElementsByTagName('label');
          console.log(lbls);
          let nps = document.getElementsByTagName('input');
          for(let i = 0; i < lbls.length; i++){
            let question = lbls[i].textContent
            let {answer, certainty} = getAnswer(question);
            console.log(answer);
            if(answer){
              nps[i].value=answer;
              if(certainty){
                nps[i].style.backgroundColor='#00FF00'
              }else{
                nps[i].style.backgroundColor='#ff0000'
              }
            }
          }
        }}/>
      
      </div>
    )
  }
}
export default Qna;