import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserContextProvider = (props) => {

    const [userStatus, setUserStatus] = useState({userStatus: false});

    useEffect(()=>{
        console.log(userStatus)
    })

    return (
        <UserContext.Provider value={{ userStatus, setUserStatus }}>
            {props.children}
        </UserContext.Provider>
    )
}

export  {UserContextProvider, UserContext}