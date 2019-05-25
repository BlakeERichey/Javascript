import React          from 'react';
import { mount }      from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import BasicLayout    from '/imports/layouts/BasicLayout.jsx';

import HomePage  from '/imports/ui/HomePage.jsx';
import AboutPage from '/imports/ui/AboutPage.jsx';
import Login     from '/client/components/login.jsx';
import Logout    from '/client/components/logout.jsx';
import CreateUser from '/client/components/accounts/accounts.create.user.jsx';

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

FlowRouter.route('/about', {
  name: 'About',
  action(){
    mount( BasicLayout, {
      content: <AboutPage />,
      auth: true
    })
  }
})

FlowRouter.route('/logout', {
  name: 'Logout',
  action(){
    mount( BasicLayout, {
      content: <Logout />,
      auth: true
    })
  }
})

FlowRouter.route('/create/user', {
  name: 'CreateUser',
  action(){
    mount( BasicLayout, {
      content: <CreateUser />,
    })
  }
})
