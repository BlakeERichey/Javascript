import React from 'react';
import DiceRoller   from '/client/components/pathfinder/pathfinder.diceroller.jsx';

class Pathfinder extends React.Component{
  constructor(){super();}

  render(){
    return(
      <div>
        <DiceRoller />
      </div>
    )
  }
}
export default Pathfinder;