import React from 'react';

import {listToString} from '/imports/functions/common.js';

class Todos extends React.Component{
  render(){
    const vals = [
      'feats',
      'misc bonuses',
      'speed',
      'spell resistance',
      'atks',
      'reach',
      'size',
      'spells',
      'languages',
      'skills']
    return(
      <div>
        {listToString(vals, ', ')}
      </div>
    )
  }
}

export default Todos;