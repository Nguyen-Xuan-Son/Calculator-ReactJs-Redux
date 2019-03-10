import React, { Component, Fragment } from 'react';

class Result extends Component {
    render() {

        const { children } = this.props;

        return (
            <Fragment>
                <div className="item-result">{children}</div>    
            </Fragment>
        );
    }
}

export default Result;
