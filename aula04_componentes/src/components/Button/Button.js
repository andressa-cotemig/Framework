import React from 'react';
import './Button.css'

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    click() {
        console.log('clicou no botão')
    }

    render() {
        return (
            <div className="button-component">
                <div onClick={this.props.onClick ?? (() => this.click())}>{this.props.title}</div>
            </div >
        )
    }
}

Button.defaultProps = {
    title: 'Botão',
};

