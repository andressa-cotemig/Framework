import React from 'react';

export default class Botao extends React.Component {

    render() {
        const { texto, onClick } = this.props;
        return (
            <div>
                <button onClick={onClick}>{texto}</button>
            </div>
        );
    }
}