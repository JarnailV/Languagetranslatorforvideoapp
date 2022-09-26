import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail,  logout  } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
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

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
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
                <ul variant="link" onClick={handleLogout} className='nav-menu'> <Button variant="success" size="lg" className="navbar-logo">Log Out</Button>
            
                </ul>
                 </div>
        </nav> 
        <Container
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: "75vh" }}
    > 
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                disabled
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
              
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading}  className="w-100" type="submit">
              Update
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
        <Link to="/Dashboard">Cancel</Link>
      </div>
        </Card.Body>
      </Card>
      
      </Container>
    </>
  )
}
