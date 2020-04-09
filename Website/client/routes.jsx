import React          from 'react';
import { mount }      from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import BasicLayout    from '/imports/layouts/BasicLayout.jsx';


import HomePage     from '/imports/ui/HomePage.jsx';
import Login        from '/client/components/login.jsx';
import Logout       from '/client/components/logout.jsx';
import CreateUser   from '/client/components/accounts/accounts.create.user.jsx';
import Nven         from '/client/components/nven/nven.jsx';

FlowRouter.route('/', {
  name: 'Home',
  action(){
    mount( BasicLayout, {
      content: <HomePage />
    })
  }
})

FlowRouter.route('/login', {
  name: 'Login',
  action(){
    mount( BasicLayout, {
      content: <Login />
    })
  }
})

FlowRouter.route('/logout', {
  name: 'Logout',
  action(){
    mount( BasicLayout, {
      content: <Logout />,
      auth: ['user', 'admin']
    })
  }
})

FlowRouter.route('/create/user', {
  name: 'CreateUser',
  action(){
    mount( BasicLayout, {
      content: <CreateUser />,
      auth: ['admin']
    })
  }
})

FlowRouter.route('/nodes', {
  name: 'Nven',
  action(){
    mount( BasicLayout, {
      content: <Nven />,
      auth: ['user', 'admin']
    })
  }
})

FlowRouter.route('/nodes/admin', {
  name: 'NvenAdmin',
  action(){
    mount( BasicLayout, {
      content: <Nven />,
      auth: ['admin']
    })
  }
})
