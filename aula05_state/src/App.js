import React from 'react';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: '' };
    }
  
    changeName(newName) {
      this.setState({ name: newName });
    }
  
    render() {
      return (
          <div>
            <h1>Meu nome é: {this.state.name}</h1>
            <input
              onChange={(e) => this.changeName(e.target.value)}
            />
          </div>
      )
    }
  }
  