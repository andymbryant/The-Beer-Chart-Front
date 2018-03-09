import React from 'react';
import TextField from 'material-ui/TextField';
import Auth from '../modules/Auth';

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            beerId: this.props.beerId
        };
    }

    //Get note drom database on mount
    componentDidMount() {
        const test = this.props.beerId;
        Auth.isUserAuthenticated() ? (
            fetch(`https://powerful-caverns-35930.herokuapp.com/api/note/${test}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `bearer ${Auth.getToken()}`
                },
            }).then(res => res.json()).then(response => this.setState({
                value: response.note}))
            ) : (this.setState({
                value: this.props.value
        }))
    }

    //bind text change to state
    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    //update note in database, based on state
    updateNote = () => {
        const test = this.props.beerId;
        fetch(`https://powerful-caverns-35930.herokuapp.com/api/note/${test}`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `bearer ${Auth.getToken()}`
            },
            body: this.state.value
        })
    }


    render() {
        const {type} = this.props;
        let beerModalStyle = '';

        if (type === 'ale') {
            beerModalStyle = {
                borderColor: '#fda810'
            }
        }
        if (type === 'amber'|| type === 'specialty') {
            beerModalStyle = {
                borderColor: '#ef4800'
            }
        }
        if (type === 'lager') {
            beerModalStyle = {
                borderColor: '#b10914'
            }
        }

        return (
            <div>
                <div className='rating-div'>
                    <p className="rating">My Notes: </p>
                </div>
                <TextField
                    id="text-field-controlled"
                    placeHolder={this.props.value}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onBlur={this.updateNote}
                    disabled={this.props.disabled}
                    underlineFocusStyle={beerModalStyle}
                    className='note-field'
                />
            </div>
            );
    }
}
