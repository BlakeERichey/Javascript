import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export class BasicInput extends React.Component{
  render(){
    let {placeholder} = this.props;
    if(!placeholder){ placeholder = 'Default Input' }
    return (
      <input ref='basicInput' type="text"
        className="form-control" 
        placeholder={placeholder}
        onChange={this.onChange.bind(this)}
        />
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
    const {text, onClick} = this.props;
    return (
      <button type="submit" style={this.props.style} 
      className="btn btn-primary"
      onClick={() => onClick()}>
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