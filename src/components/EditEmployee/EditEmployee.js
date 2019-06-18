import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './EditEmployee.css';

class EditEmployee extends Component {

    state = {
        id: 0,
        name: '',
        username: '',
        email: '',
        show: false,
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    username: res.data.username,
                    email: res.data.email
                });
            })
    }

    changeName = (e) => {
        this.setState({ name: e.target.value });
    }
    changeUsername = (e) => {
        this.setState({ username: e.target.value });
    }
    changeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    updateData = () => {
        this.setState({ show: true });
        axios.put(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`, {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div className="main-div">

                {this.state && (
                    <form>
                        <div className="form-group main-element">
                            <label>Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" value={this.state.name} onChange={this.changeName} />
                        </div>
                        <div className="form-group main-element">
                            <label>Username</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" value={this.state.username} onChange={this.changeUsername} />
                        </div>
                        <div className="form-group main-element">
                            <label>Email</label>
                            <input type="text" className="form-control" id="formGroupExampleInput3" value={this.state.email} onChange={this.changeEmail} />
                        </div>
                        <button onClick={this.updateData} type='button' className="edit__btn">Save</button>
                    </form>
                )}
                {
                    (this.state.show) ?
                        <div className="alert alert-primary" role="alert">
                            User profile updated
                        </div> : null
                }
            </div>
        )
    }

}
export default withRouter(EditEmployee);