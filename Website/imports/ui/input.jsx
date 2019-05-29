import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export class BasicInput extends React.Component{
  render(){
    let {placeholder, isNum, type} = this.props;

    if(isNum       ){ type = 'number'; }
    if(!placeholder){ placeholder = 'Default Input' }
    return (
      <input ref='basicInput' type={type || "text"}
        className="form-control" 
        placeholder={placeholder}
        onChange={this.onChange.bind(this)}
        />
    )
  }

  getValue(){
    const {isNum} = this.props;
    if(isNum){ return Number(this.refs.basicInput.value); }
    return this.refs.basicInput.value;
  }

  onChange(){
    const{onChange} = this.props;
    if(onChange){
      onChange(this.getValue());
    }
  }
}

export class BasicPass extends React.Component{
  render(){
    let {placeholder, style} = this.props;
    if(!style      ){ style = {};              }
    if(!placeholder){ placeholder = 'Password' }

    return (
      <div style={style}>
        <input ref='basicInput' type="password"
          className="form-control" 
          placeholder={placeholder}
          onChange={this.onChange.bind(this)}
          />
      </div>
    )

  }
  
  getValue(){
    return this.refs.basicInput.value;
  }

  onChange(){
    const{onChange} = this.props;
    if(onChange){
      onChange(this.refs.basicInput.value);
    }
  }
}

export class BasicButton extends React.Component{
  render(){
    const {text, onClick, type} = this.props;
    let className='btn btn-primary'
    if(type){
      className+=` btn-${type}`
    }
    return (
      <button type="submit" style={this.props.style} 
      className={className}
      onClick={onClick?() => onClick():null}>
        {text || 'Submit'}
      </button>
    )
  }
}

export class InternalLink extends React.Component{
  render(){
    const {text, style} = this.props;
    return(
      <BasicButton style={style} text={text || 'Basic'} onClick={this.changeRoute.bind(this)} />
    )
  }

  changeRoute(){
    const {dest} = this.props;
    if(!dest){ return; }
    FlowRouter.go(dest, {});
  }
}

export class BasicInputRow extends React.Component{
  render(){
    const {name, width, ...passProps} = this.props;
    let   {paddingBottom, paddingTop} = this.props;

    if(!paddingBottom){ paddingBottom = '15px'; }

    return (
      <div style={{width:width || '100%', paddingBottom, paddingTop}}>
        <table>
          <tbody>
            <tr>
              <td className='fieldTitle'>
                {name}
              </td>
              <td width='100%'>
                <BasicInput {...passProps} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export class BasicSingleSelect extends React.Component{
  render(){
    const {name, vals, width, style, defaultValue} = this.props;
    return(
      <div style={style || {width: width || '100%'}}>
        <form>
          <div className="form-group">
            <label htmlFor="basicSelect">{name}</label>
            <select className="form-control" id="basicSelect" defaultValue={defaultValue}>
              {vals.map(val => {
                return(
                  <option key={val}>{val}</option>
                )
              })}
            </select>
          </div>
        </form>
      </div>
    )
  }
}