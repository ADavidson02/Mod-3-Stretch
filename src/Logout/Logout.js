import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { Card, Button } from 'react-bootstrap'

export default function Logout() {
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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">User email</h2>
          <strong>Email:</strong> 
          {/* {currentUser.email} */}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </div>  
    </>
  )
}
