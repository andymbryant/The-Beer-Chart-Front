import React from 'react';

import Auth from '../modules/Auth'

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            index: this.props.index,
            secretData: '',
            user: {}
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

    componentWillMount() {
        this.setState({
            value: this.props.note})
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        // fetch('http://localhost:3000/note', {
        //     method: 'post',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //       note: this.state.value,
        //       index: this.state.index
        //     })
        // })

        const xhr = new XMLHttpRequest();
        xhr.open('post', 'http://localhost:3000/api/note');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            this.setState({
              secretData: xhr.response.message,
              user: xhr.response.user
            });
          }
        });
        xhr.send();

    }





render() {
    const {beerId} = this.props;
    return (
        <form onSubmit={this.handleSubmit}>
            <h1>{this.state.user.name}</h1>
            <label>
                <input type="text" text={this.props.note} value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default Text;
