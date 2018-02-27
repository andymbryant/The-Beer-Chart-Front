import React from 'react';

import Auth from '../modules/Auth'

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beerId: this.props.beerId,
            value: '',
            index: this.props.index,
            user: {}
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

    componentDidMount() {
        const test = this.state.beerId;
        // console.log(log);
        fetch(`http://localhost:3000/api/note/${test}`, {
            method: 'get',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `bearer ${Auth.getToken()}`
            },
        }).then(res => res.json()).then(response => this.setState({
            value: response.note}))
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const test = this.props.beerId;
        fetch(`http://localhost:3000/api/note/${test}`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `bearer ${Auth.getToken()}`
            },
            body: this.state.value
        }).then(res => res.json()).then(response => console.log(response.note))
    }

        // const xhr = new XMLHttpRequest();
        // xhr.open('post', 'http://localhost:3000/api/note');
        // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // // set the authorization HTTP header
        // xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        // xhr.responseType = 'json';
        // xhr.addEventListener('load', () => {
        //   if (xhr.status === 200) {
        //     this.setState({
        //       secretData: xhr.response.message,
        //       user: xhr.response.user
        //     });
        //   }
        // });
        // xhr.send();






render() {
    const {beerId, text} = this.props;
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text" text={this.props.note} value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default Text;
