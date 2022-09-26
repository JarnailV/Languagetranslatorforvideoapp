import React from 'react'
import './App.css';
import { Button} from "react-bootstrap"

function Navbar() {
   
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Button variant="outline-light" size="lg" className="navbar-logo" href="/">
                <i class="fab fa-vuejs"></i>ideo <i class="fab fa-tumblr"></i>ranslator--<i class="fas fa-globe-africa"></i>
                </Button>
                <div className="menu-icon"> 
                <i className='fas fa-bars' /> 
                </div>
                <ul className='nav-menu'>
                <Button variant="outline-light" size="lg" className="navbar-logo" href="/">Home</Button>
                <Button variant="outline-light" size="lg" className="navbar-logo" href="/sample">Samples</Button>
                <Button variant="success" size="lg" className="navbar-logo" href="/Signup">SignUp Now</Button>
            
                </ul>
                 </div>
        </nav>  
        </>
    )
}

export default Navbar
