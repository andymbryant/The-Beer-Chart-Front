import React from 'react';
import ReactDOM from 'react-dom';

import StarRatingComponent from 'react-star-rating-component';

import store from '../store';

class Stars extends React.Component {
    constructor(props) {
        super(props);

        this.state=({
            rating: this.props.rating
        })

    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    ratingSubmit(rating) {
        console.log('this is working');
        fetch('http://localhost:3000/beerUpdate', {
            method: 'put',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              rating: rating
            })
        })
    }

    render() {
        const { rating } = this.state;
        return (
            <div>
                <h2>Rating from state: {rating}</h2>
                <StarRatingComponent
                    name="rate1"
                    starCount={10}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
                <button rating={rating} onClick={ () => this.ratingSubmit(rating)}></button>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         rating: state.rating
//     }
// }

export default Stars;
// export default connect(mapStateToProps)(Stars);
