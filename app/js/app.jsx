import React from 'react';
import Dummy from './components/Dummy';


const App = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    Juna Bazaar
                </h1>
                <Dummy name="World"/>
            </div>
        )
    }
});

module.exports = App;
