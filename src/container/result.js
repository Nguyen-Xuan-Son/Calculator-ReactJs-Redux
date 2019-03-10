import React, { Component, Fragment } from 'react';
import Result from './../components/result';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ResultContainer extends Component {
    render() {
        const { result } = this.props;

        return (
            <Fragment>
                <Result>{ result }</Result>    
            </Fragment>
        );
    }
}

ResultContainer.propTypes = {
    result: PropTypes.number
}

const mapStateToProps = state => {
    return ({
        result: state.result
    })
}

export default connect(mapStateToProps, null)(ResultContainer);
