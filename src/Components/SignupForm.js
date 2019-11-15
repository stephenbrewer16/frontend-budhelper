import React, { Component } from 'react'

export default class SignupForm extends Component {

    state = {
        username: '',
        password: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({ username: this.state.username, password: this.state.password, email: this.state.email})
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.errors) {
                    alert(response.errors)
                } else {
                    this.props.setUser(response)
                }
            })
        }

    render() {
        return (
            <div className="login-box">
                <form className="login-form">

                </form>
            </div>
        )
    }
}
