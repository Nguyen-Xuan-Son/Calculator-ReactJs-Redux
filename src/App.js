import React, { Component } from 'react';
import KeysContainer from './container/keys';
import ResultContainer from './container/result';

class App extends Component {
    render() {
        return (
            <div className="container">
                <ResultContainer />
                <KeysContainer />
            </div>
        );
    }
}

export default App;
