import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import BasicLayout from '/imports/layouts/BasicLayout.jsx';

import HomePage from '/imports/ui/HomePage.jsx';
import AboutPage from '/imports/ui/AboutPage.jsx';

FlowRouter.route('/', {
  name: 'Home',
  action(){
    mount( BasicLayout, {
      content: <HomePage />
    })
  }
})

FlowRouter.route('/about', {
  name: 'About',
  action(){
    mount( BasicLayout, {
      content: <AboutPage />
    })
  }
})
