import React from 'react';
import {BasicInputRow, BasicInput} from '/imports/ui/input.jsx';
import DiceRoller   from '/client/components/pathfinder/pathfinder.diceroller.jsx';

class Pathfinder extends React.Component{
  constructor(){super();}

  render(){
    return(
      <div>
        <div style={{width:'75%', float:'left'}}>
          <p className='header'>Basic Info</p>
          <BasicInputRow placeholder='Character Name' name='Character Name' width='100%'/>

          <p className='header' style={{marginTop: '20px'}}>Defense</p>
          <BasicInputRow name='Hitpoints' placeholder='100' width='100%' isNum/>
          <BasicInputRow name='AC' placeholder='20' width='100%' isNum/>
          <BasicInputRow name='Touch AC' placeholder='10' width='100%' isNum/>
          <BasicInputRow name='Flatfooted AC' placeholder='10' width='100%' isNum/>
          <BasicInputRow name='DR' placeholder='10/Blud, 5/silver, 10/magic' width='100%'/>
          <BasicInputRow name='Immunity' placeholder='Electricity, Fire, Poison' width='100%'/>
          <BasicInputRow name='Resist' placeholder='Fire 10, cold 10' width='100%'/>
          <div style={{paddingBottom: '15px'}}>
            <table>
              <tbody>
                <tr>
                  <td className='fieldTitle'>
                    Saves
                  </td>
                  <td width='25%' style={{paddingRight: '10px'}}>
                    <BasicInput placeholder='Fort' isNum/>
                  </td>
                  <td width='25%' style={{paddingRight: '10px'}}>
                    <BasicInput placeholder='Dex' isNum/>
                  </td>
                  <td width='25%' >
                    <BasicInput  placeholder='Will' isNum/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <DiceRoller />
        </div> 
      </div>
    )
  }
}
export default Pathfinder;