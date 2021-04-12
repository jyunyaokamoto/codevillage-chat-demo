import React, { useState } from 'react'
import firebase from '../config/firebase'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    displayName: name
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    return(
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input 
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    name='email'
                    type='email'
                    id='email'
                    placeholder='email'
                />
            </div>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    name='name'
                    type='name'
                    id='name'
                    placeholder='userName'
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input 
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    name='password'
                    type='password'
                    id='password'
                    placeholder='password'
                />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
    )
}

export default SignUp