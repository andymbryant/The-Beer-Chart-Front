import React from 'react';
import Token from './Token';

class Type extends React.Component {
    render() {

        const { beerData, type } = this.props;

            return (
                    <div className="inline">
                        {beerData.map((key, index) => {
                            return (
                                <div key={index} className={`type-${type}`}>
                                    <div className={`type-header-${type}`}>
                                    <h2 className='type-title'>{key.name}</h2>
                                    </div>
                                        <Token beers={key.beers} id={key.id} type={type} className={`token-${type}`}/>
                                </div>
                            )
                        })}
                    </div>

            )
        }
}

export default Type;
