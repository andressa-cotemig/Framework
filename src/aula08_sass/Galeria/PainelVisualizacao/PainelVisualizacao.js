import React from 'react';
import Imagem from '../Imagem/Imagem';
import Titulo from '../Titulo/Titulo';
import './PainelVisualizacao.scss'

export default class PainelVisualizacao extends React.Component {

    render() {
        const { titulo, descricao, img } = this.props;
        return (
            <div id="painel">
                <Titulo texto="Painel de Visualização" tamanho="medio" />
                <Imagem img={img} titulo={titulo} descricao={descricao} />
            </div>
        );
    }
}