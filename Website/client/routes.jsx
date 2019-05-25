import React          from 'react';
import { mount }      from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import BasicLayout    from '/imports/layouts/BasicLayout.jsx';

import HomePage  from '/imports/ui/HomePage.jsx';
import AboutPage from '/imports/ui/AboutPage.jsx';
import Login     from '/client/components/Login.jsx';
import Logout    from '/client/components/Logout.jsx';

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
