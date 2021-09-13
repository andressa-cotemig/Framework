import React from 'react';
import { LifeCycle } from "./components/Lifecycle/Lifecycle";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exibe: false,
      lifecyle: true
    };
  }

  click() {
    this.setState({
      exibe: !this.state.exibe,
    })
  }

  removeComponente() {
    this.setState({
      lifecyle: !this.state.lifecyle,
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.click()}>Clique aqui</button>
        <button onClick={() => this.removeComponente()}>Remove componente</button>
        {this.state.lifecyle && <LifeCycle exibicao={this.state.exibe} />}
      </div>
    );
  }
}
