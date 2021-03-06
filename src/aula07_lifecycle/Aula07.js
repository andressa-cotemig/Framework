import React from 'react';
import Header from './Header/Header';
import { LifeCycle } from "./Lifecycle/Lifecycle";
import Container from "./Container/Container";

export default class Aula07 extends React.Component {
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
      <div className="Aula07">
        <div className="item">
          <Header favcol="blue" />
        </div>
        <div className="item">
          <Container />
        </div>
        <div className="item">
          <button onClick={() => this.click()}>Clique aqui</button>
          <button onClick={() => this.removeComponente()}>Remove componente</button>
          {this.state.lifecyle && <LifeCycle exibicao={this.state.exibe} />}
        </div>
      </div>
    );
  }
}
