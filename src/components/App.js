import React from 'react';

import Type from './Type';
import lagers from '../lagers';
import ales from '../ales';

class App extends React.Component {
    constructor() {
        super();

        this.test = this.test.bind(this);
    }

    test(val) {
        console.log(val);
    }

    render() {

    return (
        <main>
            <div className='ale-view'>
                <Type beerData={ales} type='ale' test={this.test}/>
            </div>

            <div className='lager-view'>
                <Type beerData={lagers} type='lager'/>
            </div>
        </main>
    )
  }
}

export default App;
