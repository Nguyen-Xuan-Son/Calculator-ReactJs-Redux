import React, { Component, Fragment } from 'react';
import Button from './../components/button';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class KeysContainer extends Component {
    render() {
        return (
            <Fragment>
                <div className="item-keys">
                    <div className="item-key">
                        <Button onInput={this.onInput} name="A/C" />
                        <Button onInput={this.onInput} name="+/-" />
                        <Button onInput={this.onInput} name="%" />
                        <Button onInput={this.onInput} className_button="item-operation" name="/" />
                    </div>
                    <div className="item-key">
                        <Button onInput={this.onInput} name={7} />
                        <Button onInput={this.onInput} name={8} />
                        <Button onInput={this.onInput} name={9} />
                        <Button onInput={this.onInput} className_button="item-operation" name="X" />
                    </div>
                    <div className="item-key">
                        <Button onInput={this.onInput} name={4} />
                        <Button onInput={this.onInput} name={5} />
                        <Button onInput={this.onInput} name={6} />
                        <Button onInput={this.onInput} className_button="item-operation" name="-" />
                    </div>
                    <div className="item-key">
                        <Button onInput={this.onInput} name={1} />
                        <Button onInput={this.onInput} name={2} />
                        <Button onInput={this.onInput} name={3} />
                        <Button onInput={this.onInput} className_button="item-operation" name="+" />
                    </div>
                    <div className="item-key">
                        <Button onInput={this.onInput} className_div="wide-75" name={0} />
                        <Button onInput={this.onInput} className_button="item-operation" name="=" />
                    </div>
                </div>
            </Fragment>
        );
    }

    onInput = (value) => {
        this.props.onInput(value);
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onInput: (value) => {
            dispatch(actions.input(value))
        }
    }
}

export default connect(null, mapDispatchToProps)(KeysContainer);
