import React from 'react';
import {BasicInputRow, BasicInput, BasicButton} from '/imports/ui/input.jsx';

class Nven extends React.Component{
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
      </div>
    )
  }
}
export default Nven;