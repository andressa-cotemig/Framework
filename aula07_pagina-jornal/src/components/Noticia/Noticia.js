import React from 'react';
import Titulo from '../Titulo/Titulo';
import Imagem from '../Imagem/Imagem';
import Descricao from '../Descricao/Descricao';
import Botao from '../Botao/Botao';

export default class Noticia extends React.Component {

    render() {
        const { titulo, descricao, img, onClick, link, botao } = this.props;
        
        return (
            <div>
                <Titulo texto={titulo} />
                <Imagem img={img} />
                <Descricao texto={descricao} />
                <Botao onClick={onClick} link={link}>{botao}</Botao>
            </div>
        );
    }
}
