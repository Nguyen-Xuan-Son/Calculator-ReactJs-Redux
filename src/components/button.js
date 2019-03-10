import React, { Component } from 'react';

class Button extends Component {
    render() {

        const { name, className_button, className_div } = this.props;

        return (
            <div className={className_div}>
                <button className={className_button} onClick={() => this.onInputNumber(name)}>{name}</button>
            </div>
        );
    }

    onInputNumber = (value) => {
        this.props.onInput(value);
    }
}

export default Button;
