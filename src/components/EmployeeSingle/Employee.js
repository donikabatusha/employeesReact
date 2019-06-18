import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Employee.css';


class Employee extends Component{
    render(){
        return(
            <div className="card">
                <p>Name: {this.props.name}</p>
                <p>Username: {this.props.username}</p>
                <p>Email: {this.props.email}</p>
                <button className="edit__btn"><NavLink to={"/EditEmployee/" + this.props.id}>Edit</NavLink></button>
            </div>
        )
    }

}

export default Employee;