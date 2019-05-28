import React from 'react';
import {BasicButton} from '/imports/ui/input.jsx';

class DiceRoller extends React.Component{
  constructor(){super();
    this.state={
      lastRolls: [],
    };
  }

  render(){
    const {lastRolls} = this.state;
    const dice = [2,3,4,6,8,10,12,20];
    return(
      <div style={{marginRight: '30px'}}>
          <div className='panel'>
            <table style={{width: '100%'}}>
              <tbody>
                <tr>
                  <td className='right'>Sides</td>
                  <td className='right'>Rolls</td>
                </tr>
              </tbody>
            </table>
            <table style={{width:'100%'}}>
              <tbody>
                {dice.map((sides) => {
                  return (
                    <tr key={sides}>
                      <td className='right' width='50%'>
                        {sides}
                      </td>
                      <td className='right'>
                        <BasicButton text='Roll' type='sm' onClick={this.roll.bind(this, sides)}/>
                      </td>
                    </tr>
                  )
                })}        
              </tbody>         
            </table>
            <hr/>
            <div style={{textAlign: 'center'}}>
              {lastRolls && lastRolls.map((roll, i) => {
                return(
                  <div key={i}>
                    {roll}
                  </div>
                )
              })}
            </div>
          </div>
      </div>
    )
  }

  roll(sides){
    const {lastRolls} = this.state;
    const f = () => Math.floor(Math.random()*sides +1); //roll
    if(lastRolls){
      if(lastRolls.length>10){ lastRolls.pop(); }
      lastRolls.unshift(f());
    }else{
      lastRolls.push(f());
    }
    this.setState({lastRolls});
  }
}
export default DiceRoller;