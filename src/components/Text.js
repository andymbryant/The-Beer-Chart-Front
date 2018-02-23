import React from 'react';

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            index: this.props.index
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
        fetch('http://localhost:3000/noteUpdate', {
            method: 'put',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              note: this.state.value,
              index: this.state.index
            })
        })
    }


render() {
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
