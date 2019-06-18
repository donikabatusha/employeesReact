import React,{Component} from 'react';
import './Header.css';


class Header extends Component{

    render(){
        return (
            <nav className="header-nav navbar navbar-light">    
                <h1>Employees</h1>      
            </nav>
        )
    }
}

export default Header;