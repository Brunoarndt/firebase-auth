import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false)

    // eslint-disable-next-line no-unused-vars
    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try{
            setError('')
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
        }catch{
            setError('Failed to create an account')
        }
        setLoading(false)
    }


  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={console.log("clicou2")}>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required/>
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={passwordRef} required/>
                </Form.Group>
                <Form.Group id='password-confirm'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='password' ref={passwordConfirmRef} required/>
                </Form.Group>
                <Button  className='w-100'>Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>Already have an account? Log In</div>
    </>
    
    
  )
}
