import React from 'react';
import Auth from '../modules/Auth';
import StarRatingComponent from 'react-star-rating-component';

import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

class Stars extends React.Component {
    constructor(props) {
        super(props);

        this.state=({
            open: false
        })

    }

    componentDidMount() {
        const test = this.props.beerId;
        console.log(`This is test: ${test}`);
        Auth.isUserAuthenticated() ? (
            fetch(`http://localhost:3000/api/stars/${test}`, {
                method: 'get',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Authorization': `bearer ${Auth.getToken()}`
                },
            }).then(res => res.json()).then(response => this.setState({rating: response.rating}))
        ) : (this.setState({
            value: 0
        }))
    }

    componentShouldUpdate() {
        const test = this.props.beerId;
        console.log('this is a test');
        Auth.isUserAuthenticated() ? (
            fetch(`http://localhost:3000/api/stars/${test}`, {
                method: 'get',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Authorization': `bearer ${Auth.getToken()}`
                },
            }).then(res => res.json()).then(response => this.setState({rating: response.rating}))
        ) : (this.setState({
            value: 0
        }))
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

    ratingSubmit() {
        const beerId = this.props.beerId;
        fetch(`http://localhost:3000/api/stars/${beerId}`, {
            method: 'put',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `bearer ${Auth.getToken()}`
            },
            body: JSON.stringify(this.state.rating)
        })
    }

    render() {
        const { rating } = this.state;
        return (
            <div>
                <p className="rating">My Rating: </p>
                <StarRatingComponent
                    name="rate1"
                    starCount={10}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />

                    <RaisedButton
                        onClick={()=> this.ratingSubmit()}
                        label="Submit"
                    />
                    {/* <RaisedButton
                        rating={rating}
                        label="Submit"
                        disabled={true}
                    /> */}

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
