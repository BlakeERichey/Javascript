import React from 'react'
// import ReactDOM from 'react-dom'
import './index.css'

class Greeting extends React.Component {
  constructor(){super();
    this.state={};
  }
  render(){
    return(
      <div>
        Greetings
      </div>
    )
  }
}

export class Goodbye extends React.Component {
  constructor(){super();
    this.state={};
  }
  render(){
    return(
      <div>
        Goodbye
      </div>
    )
  }
}

// ReactDOM.render(<Greeting />, document.getElementById("root"));