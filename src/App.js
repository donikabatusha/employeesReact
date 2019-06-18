import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Employees from './components/EmployeesList/Employees';
import EditEmployee from './components/EditEmployee/EditEmployee';
import Header from './components/Header/Header';

class App extends Component {

	state = {
		employees: []
	}
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
			.then(res => this.setState({ employees: res.data }))
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Route exact path="/EditEmployee/:id" render={ () => <EditEmployee /> } />
				<Route exact path="/" render={ () => <Employees editEmployee={this.editEmployee} employees={this.state.employees} /> } />
			</div>
		);
	}
}

export default App;
