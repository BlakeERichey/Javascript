import React from 'react';
import { Random }   from 'meteor/random';
import { nven } from '/libs/collections.js';
import {
  BasicInputRow, BasicInput, BasicButton, 
  BasicSingleSelect, BasicButtonCollapse  } from '/imports/ui/input.jsx';

class Nven extends React.Component{
  constructor(){super();
    this.state = {};
  }

  componentWillMount(){
    //Autoupdate when database updates
    Tracker.autorun(() => {
      const doc = nven.findOne({owner: Meteor.userId()})
      this.setState({doc})
    });
  }

  render(){
    const {doc} = this.state;
    const {nodes} = doc;
    console.log('Doc:', doc, 'Nodes:', nodes)
    return(
      <div>
        {nodes.map((node, i) => {
          return(
            <div key={Random.id()}>
              {this.nodeHtml(node, 'Node '+i)}
            </div>
          )
        })}
        <BasicButtonCollapse text='This is a test' name='names' show={false} style={{width: '80%', marginLeft: '10%'}}>
          <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </BasicButtonCollapse>
      </div>
    )
  }

  nodeHtml(node, name){
    return(
      <div>
        <BasicButtonCollapse text={name} name={Random.id()} show={false} 
          style={{width: '80%', marginLeft: '10%'}}>
          
          <div style={{paddingTop: '10px'}}>
            {node.sensors.map((sensor, i) => {
              return (
                <div key={i}>
                  <p className='header'>Sensor {i}</p>

                  <table>
                    <tbody>
                      <tr>
                        <td className='fieldTitle'>
                          Description
                        </td>
                        <td width='90%'>
                          {sensor.desc}
                        </td>
                        <td>
                          <BasicButton text='Edit'/>
                        </td>
                      </tr>
                      <tr>
                        <td className='fieldTitle'>
                          Weight (in grams)
                        </td>
                        <td width='100%'>
                          {sensor.weight}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br/>
                  
                </div>
              )
            })}

            <BasicButton text='Save' style={{float: 'right', marginBottom: '10px'}} onClick={() => {}}/>
          </div>

        </BasicButtonCollapse>
      </div>
    )
  }
}
export default Nven;