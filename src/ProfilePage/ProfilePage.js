
import React, { useState } from 'react'
import { Card } from 'bootstrap'
import { userAuth } from "../contexts/AuthContext"

const ProfilePage = () => {
  const [error, setError ] = userState(' ')
  const { currentUser } = useAuth()
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Aler variant="danger">{error}</Aler>}
          <stron>Email:</stron> {currentUser.email}
        </Card.Body>
      </Card>
    </div>
  )
}