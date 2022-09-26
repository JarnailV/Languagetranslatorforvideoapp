import React, { useState } from "react"
import Iframe from 'react-iframe'
import "./App.css";
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"

export default function Dashboard() {


  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }


  return (
    <>

      <nav className="navbar">
        <div className="navbar-container">
          <Button variant="outline-light" size="lg" className="navbar-logo" >
            <i class="fab fa-vuejs"></i>ideo <i class="fab fa-tumblr"></i>ranslator--<i class="fas fa-globe-africa"></i>
          </Button>
          <div className="menu-icon">
            <i className='fas fa-bars' />
          </div>

          <ul variant="link" className='nav-menu'>
            <h1 style={{ color: 'white', fontSize: 20 }}>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
            </h1>
            <Link to="/update-profile" className="btn btn-primary">
              Update Profile
            </Link>
            <Button variant="success" size="" onClick={handleLogout} className="btn btn-primary">Log Out</Button>

          </ul>
        </div>
      </nav>
      <Container
        className=""
      >
            <Iframe url="http://127.0.0.1:7860/"
        width="1150px"
        height="1050px"
        
        display="initial"
        position="relative"/>
         
        <div className="w-100 text-center mt-2">
        </div>
      </Container>

    </>
  )
}
