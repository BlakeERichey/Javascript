import React from 'react';
import {BasicInputRow} from '/imports/ui/input.jsx';
import DiceRoller   from '/client/components/pathfinder/pathfinder.diceroller.jsx';

class Pathfinder extends React.Component{
  constructor(){super();}

  render(){
    return(
      <div>
        <BasicInputRow placeholder='Character Name' name='Character Name' width='50%'/>
        <DiceRoller />
      </div>
    )
  }
}
export default Pathfinder;