import React from 'react';
import Auth from '../modules/Auth';
import StarRatingComponent from 'react-star-rating-component';

import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

class Stars extends React.Component {
    constructor(props) {
        super(props);

        this.state=({
            rating: this.props.rating,
            open: false
        })

    }

    handleClick = () => {
        this.setState({
        open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
        open: false,
        });
    };

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    ratingSubmit(rating) {
        console.log('this is working');
        fetch('http://localhost:3000/stars/', {
            method: 'put',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            withCredentials: true,
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

                {Auth.isUserAuthenticated() ? (
                    <button className="submit-button" rating={rating} onClick={ () => this.ratingSubmit(rating)}>Submit</button>
                ) : (
                    <button className="submit-button" disabled={true}>Submit</button>

                )}

                <RaisedButton
                    onClick={this.handleClick}
                    label="Add to my calendar"
                />
                <Snackbar
                    open={this.state.open}
                    message="Event added to your calendar"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
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
