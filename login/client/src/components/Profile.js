import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { email } from './UserFunctions'


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
    }
    
    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    onSubmit (e) {
        e.preventDefault()
        
        window.open("http://localhost:8080/principal.html")

        const user = {
            email: this.state.email
        }

        email(user).then(
            console.log("saludos")
        ).catch(err => {
            console.log(err)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Primer Nombre</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Apellido></td>/td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                            
                            <div className="container">
                        <form noValidate onSubmit={this.onSubmit}>
                            <button
                                className="btn btn-lg btn-primary btn-block">
                                Entrar al chat
                            </button>
                                </form>
                                </div>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile