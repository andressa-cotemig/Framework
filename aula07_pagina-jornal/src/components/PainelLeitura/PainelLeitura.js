import React from 'react';
import Noticia from '../Noticia/Noticia';
import Titulo from '../Titulo/Titulo';

export default class PainelLeitura extends React.Component {

    render() {
        const { titulo, descricao, link } = this.props;
        return (
            <div>
                <Titulo texto="Painel de leitura" tamanho="medio" />
                <Noticia botao='Acessar' titulo={titulo} descricao={descricao} link={link} />
            </div>
        );
    }
}