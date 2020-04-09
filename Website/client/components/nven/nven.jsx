import React from 'react';
import { Random }   from 'meteor/random';
import { nven } from '/libs/collections.js';
import {
  BasicInputRow, BasicInput, BasicButton, 
  BasicSingleSelect, BasicButtonCollapse  } from '/imports/ui/input.jsx';

class Nven extends React.Component{
  constructor(){super();
    this.state = {
      updating: undefined,
      showing: undefined
    };
  }

  componentWillMount(){
    //Autoupdate when database updates
    Tracker.autorun(() => {
      const doc = nven.findOne({owner: Meteor.userId()})
      const state = {doc: doc}
      
      //Assign Nven state with initially no sensors being updated or showing
      const {nodes} = doc;
      if(nodes){
        if(!this.state.updating){
          const updatingSensors = nodes.map(node => {
            return Array(node.sensors.length).fill(false)
          })
          const updating = {
            nodes: updatingSensors
          }
          
          Object.assign(state, {updating})
        }

        if(!this.state.showing){
          const showing = Array(nodes.length).fill(false)
          Object.assign(state, {showing})
        }
      }
      this.setState(state)
    });
  }

  render(){
    const {doc} = this.state;
    const {nodes} = doc;
    console.log('Doc:', doc, 'Nodes:', nodes)
    console.log('State:', this.state)
    return(
      <div>
        {nodes.map((node, i) => {
          return(
            <div key={Random.id()}>
              {this.nodeHtml(node, 'Node', i)}
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

  nodeHtml(node, name, nodeIndex){
    const {doc} = this.state
    const {nodes} = this.state.updating;
    const show = this.state.showing[nodeIndex];
    const sensors = nodes[nodeIndex];
    return(
      <div>
        <BasicButtonCollapse text={`${name} ${nodeIndex}`} name={Random.id()} 
          show={show} style={{width: '80%', marginLeft: '10%'}}
          onClick={() => {
            const newState = this.state
            newState.showing[nodeIndex] = !newState.showing[nodeIndex]
            this.setState(newState)}
          }
        >
          
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
                          {sensors[i]?
                            <BasicInput defaultValue={sensor.desc} 
                              onChange={(desc) => {
                                doc.nodes[nodeIndex].sensors[i].desc = desc
                              }}
                            />
                          :sensor.desc}
                        </td>
                        <td>
                          <BasicButton text={sensors[i]?'Done':'Edit'}
                            onClick={() => {
                              nodes[nodeIndex][i] = !sensors[i]
                              this.setState({updating: {nodes}})
                              this.save(nodeIndex);
                            }}/>
                        </td>
                      </tr>

                      <tr>
                        <td className='fieldTitle' 
                          style={{backgroundColor: sensor.weight<sensor.threshold?'red':null}}>
                            Weight
                        </td>
                        <td width='100%'>
                          {sensor.weight} grams
                        </td>
                      </tr>

                      <tr>
                        <td className='fieldTitle'>
                          Threshold
                        </td>
                        <td width='90%'>
                          {sensors[i]?
                            <BasicInput defaultValue={sensor.threshold} 
                              onChange={(threshold) => {
                                doc.nodes[nodeIndex].sensors[i].threshold = Number(threshold)
                              }}
                            />
                          :`${sensor.threshold} grams`}
                        </td>
                        <td>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                  <br/>

                </div>
              )
            })}

            <BasicButton text='Save' style={{float: 'right', marginBottom: '10px'}} 
              onClick={() => {this.save(nodeIndex)}}/>
          </div>

        </BasicButtonCollapse>
      </div>
    )
  }

  save(nodeIndex){
    Meteor.call('nven.update', this.state.doc, (err, res) => {
      if(err){
        alert(err);
      }else{
        const {updating} = this.state;
        if(updating){
          updating.nodes[nodeIndex].forEach((sensor, i) => {
            updating.nodes[nodeIndex][i] = false;
          })
        }
      }
    })
  }
}
export default Nven;