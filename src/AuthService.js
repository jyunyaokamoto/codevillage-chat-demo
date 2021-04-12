import React, { useState, useEffect } from 'react'
import firebase from './config/firebase'

//contextの作成
const AuthContext = React.createContext()

//ログイン済のユーザーのオブジェクトがuserに入る
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

//ユーザーログイン、アウトの時に必ず呼び出される（コンポーネント描写後に実行、第二引数は実行頻度）
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
       })
    }, [])

    return(
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthContext,
    AuthProvider
}

