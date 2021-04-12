//loginコンポーネントに使用するコンポーネント（Appコンポーネントに配置）

import React, { Component, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './AuthService'

const LoggedInRoute =  ({component: Component, ...rest }) => {
    const user = useContext(AuthContext)

    return(
        <Route 
            {...rest}
            render={props => 
                user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={'/login'} />
                )
            }
        />
    )
}

export default LoggedInRoute