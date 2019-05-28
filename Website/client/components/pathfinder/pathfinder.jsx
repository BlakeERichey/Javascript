import React from 'react';
import {BasicInputRow, BasicInput} from '/imports/ui/input.jsx';
import DiceRoller   from '/client/components/pathfinder/pathfinder.diceroller.jsx';

class Pathfinder extends React.Component{
  constructor(){super();
    this.state={};
  }

  render(){
    const {saves, stats} = this.state;
    // console.log(this.state);
    return(
      <div>
        <div style={{width:'75%', float:'left'}}>
          <p className='header'>Basic Info</p>
          <BasicInputRow name='Character Name' placeholder='Character Name'              width='100%'
            onChange={(name) => this.setState({name})}/>
          
          <BasicInputRow name='Hit Dice' placeholder='1-20'                              width='100%'
            onChange={(hitDice) => this.setState({hitDice})}/>

          <table>
            <tbody>
              <tr>
                <td className='fieldTitle'>
                  Stats
                </td>
                <td width='25%' style={{paddingRight: '10px'}}>
                  <BasicInput placeholder='Str' isNum
                    onChange={(str) => {
                      const newStats = Object.assign({}, stats, {str})
                      this.setState({stats: newStats})}
                    }/>
                </td>
                <td width='25%' style={{paddingRight: '10px'}}>
                  <BasicInput  placeholder='Dex' isNum
                      onChange={(dex) => {
                      const newStats = Object.assign({}, stats, {dex})
                      this.setState({stats: newStats})}
                      }/>
                </td>
                <td width='25%' >
                  <BasicInput  placeholder='Con' isNum
                      onChange={(con) => {
                      const newStats = Object.assign({}, stats, {con})
                      this.setState({stats: newStats})}
                      }/>
                </td>
              </tr>
              <tr>
                <td className='fieldTitle' />
                <td width='25%' style={{paddingRight: '10px'}}>
                  <BasicInput placeholder='Int' isNum
                    onChange={(int) => {
                      const newStats = Object.assign({}, stats, {int})
                      this.setState({stats: newStats})}
                    }/>
                </td>
                <td width='25%' style={{paddingRight: '10px'}}>
                  <BasicInput  placeholder='Wis' isNum
                      onChange={(wis) => {
                      const newStats = Object.assign({}, stats, {wis})
                      this.setState({stats: newStats})}
                      }/>
                </td>
                <td width='25%' >
                  <BasicInput  placeholder='Cha' isNum
                      onChange={(cha) => {
                      const newStats = Object.assign({}, stats, {cha})
                      this.setState({stats: newStats})}
                      }/>
                </td>
              </tr>
            </tbody>
          </table>

          <p className='header' style={{marginTop: '20px'}}>Defense</p>
          <BasicInputRow name='Hitpoints'      placeholder='100'                         width='100%' isNum
            onChange={(hitpoints) => this.setState({hitpoints})}/>
          <BasicInputRow name='AC'             placeholder='20'                          width='100%' isNum
            onChange={(ac) => this.setState({ac})}/>
          <BasicInputRow name='Touch AC'       placeholder='10'                          width='100%' isNum
            onChange={(touchAc) => this.setState({touchAc})}/>
          <BasicInputRow name='Flatfooted AC'  placeholder='10'                          width='100%' isNum
            onChange={(ffac) => this.setState({ffac})}/>
          <BasicInputRow name='DR'             placeholder='10/Blud, 5/silver, 10/magic' width='100%'
            onChange={(dr) => this.setState({dr})}/>
          <BasicInputRow name='Immunity'       placeholder='Electricity, Fire, Poison'   width='100%'
            onChange={(immunities) => this.setState({immunities})}/>
          <BasicInputRow name='Resist'         placeholder='Fire 10, cold 10'            width='100%'
            onChange={(resist) => this.setState({resist})}/>
          <div style={{paddingBottom: '15px'}}>
            <table>
              <tbody>
                <tr>
                  <td className='fieldTitle'>
                    Saves
                  </td>
                  <td width='25%' style={{paddingRight: '10px'}}>
                    <BasicInput placeholder='Fort' isNum
                      onChange={(fort) => {
                        const newSaves = Object.assign({}, saves, {fort})
                        this.setState({saves: newSaves})}
                      }/>
                  </td>
                  <td width='25%' style={{paddingRight: '10px'}}>
                    <BasicInput  placeholder='Dex' isNum
                       onChange={(dex) => {
                        const newSaves = Object.assign({}, saves, {dex})
                        this.setState({saves: newSaves})}
                       }/>
                  </td>
                  <td width='25%' >
                    <BasicInput  placeholder='Will' isNum
                       onChange={(will) => {
                        const newSaves = Object.assign({}, saves, {will})
                        this.setState({saves: newSaves})}
                       }/>
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