import logo from '../../logo.svg';
import React from 'react';
import Noticia from '../Noticia/Noticia';
import Titulo from '../Titulo/Titulo';
import './Jornal.scss'

export default class Jornal extends React.Component {

    render() {
        return (
            <div id='jornal'>
                <div className="sessao" id='esporte'>
                    <Titulo texto="Esporte" />
                    <div className="noticias">
                        <Noticia titulo={'Noticia 1'} descricao={'Descricao 1'} img={logo} />
                        <Noticia titulo={'Noticia 1'} descricao={'Descricao 1'} img={logo} />
                        <Noticia titulo={'Noticia 1'} descricao={'Descricao 1'} img={logo} />
                    </div>
                </div>
                <div className="sessao" id='novela'>
                    <Titulo texto="novela" />
                    <div className="noticias">
                        <Noticia titulo={'Noticia 1'} descricao={'Descricao 1'} img={logo} />
                        <Noticia titulo={'Noticia 1'} descricao={'Descricao 1'} img={logo} />
                        <Noticia titulo={'Noticia 1'} descricao={'Descricao 1'} img={logo} />
                    </div>
                </div>
                <div className="sessao" id='saude'>
                    <Titulo texto="saude" />
                    <div className="noticias">
                        <Noticia titulo={'Noticia 1'} descricao={'Descricao 1'} img={logo} />
                        <Noticia titulo={'Noticia 1'} descricao={'Descricao 1'} img={logo} />
                        <Noticia titulo={'Noticia 1'} descricao={'Descricao 1'} img={logo} />
                    </div>
                </div>
            </div>
        );
    }
}
