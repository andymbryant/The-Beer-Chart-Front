import React from 'react';
import TextField from 'material-ui/TextField';
import Auth from '../modules/Auth';
import RaisedButton from 'material-ui/RaisedButton';

export default class Note extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };
  }

  componentDidMount() {
    const test = this.props.beerId;
    Auth.isUserAuthenticated() ? (
        fetch(`http://localhost:3000/api/note/${test}`, {
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



  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

    updateNote = () => {
        const test = this.props.beerId;
        fetch(`http://localhost:3000/api/note/${test}`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `bearer ${Auth.getToken()}`
            },
            body: this.state.value
        })
    }

    delete = (id) => {
        fetch(`http://localhost:3000/api/deleteNote/${id}`, {
            method: 'delete',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `bearer ${Auth.getToken()}`
            },
            body: JSON.stringify(this.state.value)
        }).then(console.log('the promise returned'))
    }

  render() {
    return (
      <div>
          <p className="rating">My Notes: </p>
            <TextField
              id="text-field-controlled"
              value={this.state.value}
              onChange={this.handleChange}
              onBlur={this.updateNote}
              disabled={this.props.disabled}
            />
            <RaisedButton
                onClick={()=> this.delete(this.state.beerId)}
                label="Delete Note"
            />
      </div>
    );
  }
}
