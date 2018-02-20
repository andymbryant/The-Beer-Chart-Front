import React from 'react';

import Token from './Token';

class Type extends React.Component {
    render() {

        const { beerData, type, test } = this.props;
            return (
                    <div>
                        {beerData.map((key, index) => {
                            return (
                                <div key={index} className={`type-${type}`}>
                                    <div className={`type-header-${type}`}>
                                        <h1 className='type-title'>{key.name}</h1>
                                    </div>
                                        <Token beers={key.beers} id={key.id} type={type} className={`token-${type}`} test={test}/>

                                </div>
                            )
                        })}
                    </div>

            )
        }
}

export default Type;
