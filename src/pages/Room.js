import React, { useContext, useEffect, useState } from 'react'
import firebase from '../config/firebase'
import 'firebase/firestore'
import { AuthContext } from '../AuthService'

const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    useEffect(() =>{
        firebase.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                
                setMessages(messages)
            })
    }, [])

    const user = useContext(AuthContext)

    const handleSubmit = () => {
        firebase.firestore().collection('messages').add({
            content:value,
            user:user.displayName
        })
    }



    return(
        <>
            <h1>Room</h1>
            <ul>
                <li>

                </li>
            </ul>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
            <button type='submit'>送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room