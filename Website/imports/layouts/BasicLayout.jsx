import React from 'react'
import {Session} from 'meteor/session';

import {InternalLink} from '/imports/ui/input.jsx';
import {login, logout} from '/imports/functions/common.js';

class BasicLayout extends React.Component{
  render(){
    if(this.props.auth){
      if(!Meteor.userId()){
        return (
          <div>
            {this.navigationBar()}
            <div>
              Please login to continue
            </div>
            <div>
              <InternalLink dest='Login' text='Login' />
            </div>
          </div>
        )
      }
    }
    return (
      <div>
        {this.navigationBar()}
        {this.props.content}
      </div>
    )
  };

  loginToggle(){
    if(Meteor.userId()){
      return(
        <a onClick={() => {
          logout((err) => {
            if(err){
              console.log(err);
            }else{
              FlowRouter.go('Home');
              this.setState({});
            }
          });
        }}>
          Logout
        </a>
      )
    }else{
      return(
        <a onClick={()=>FlowRouter.go('Login')}>Login</a>
      )
    }
  }

  navigationBar(){
    return(
      <div className='navig'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <InternalLink dest='Home' text='Home'/>
            </li>
            <li className="nav-item">
              <InternalLink dest='About' text='About'/>
            </li>
            <li className="nav-item">
              <InternalLink dest='/pathfinder' text='Pathfinder'/>
            </li>
            <li className="nav-item">
              <InternalLink dest='GoblinSlayer' text='GoblinSlayer'/>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto" style={{float: 'right'}}>
            <li className="nav-item dropdown">
              <button className="btn btn-primary" id='navbar-dropdown' data-toggle="dropdown">
                Account
              </button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                {this.loginToggle()}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" onClick={()=>FlowRouter.go('CreateUser')}>Create User</a>
              </div>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    )
  }
}

export default BasicLayout