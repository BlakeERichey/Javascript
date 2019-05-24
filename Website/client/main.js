import  React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import './main.html';
import BasicLayout from '/imports/layouts/BasicLayout.jsx';

Meteor.startup(() => {
  render( <BasicLayout />, document.getElementById("root"));
});
