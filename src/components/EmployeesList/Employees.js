import React, { Component } from 'react';
import Employee from '../EmployeeSingle/Employee';

class Employees extends Component {
    render() {
        return this.props.employees.map((employees) => (
            <Employee
                key={employees.id}
                id={employees.id}
                name={employees.name}
                username={employees.username}
                email={employees.email}
                editEmployee={this.props.editEmployee} />))
    }
}

export default Employees;