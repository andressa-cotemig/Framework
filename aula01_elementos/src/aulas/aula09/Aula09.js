import React from 'react';
import Episodios from './Episodios/Episodios';
import Frases from './Frases/Frases';
import Mortes from './Mortes/Mortes';
import Personagens from './Personagens/Personagens';

export default class Aula09 extends React.Component {


  render() {
    return (
      <div>
        <Mortes />
        <Frases />
        <Personagens />
        <Episodios />
      </div>
    );
  }
}