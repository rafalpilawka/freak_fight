import React, { createContext, useState, useEffect, useContext } from 'react';
import FirebaseContext from 'firebase/context';

const UserContext = createContext();

const UserContextProvider = (props) => {

    const { auth } =  useContext(FirebaseContext)
    // const [userStatus, setUserStatus] = useState({userStatus: auth.currentUser});
    const [userStatus, setUserStatus] = useState();

    useEffect(()=>{
     const asyncSet = async () => {
         await setUserStatus({userStatus: auth.currentUser});
      }

        asyncSet()
        console.log('111111', userStatus)
    },[])

    return (
        <UserContext.Provider value={{ userStatus, setUserStatus }}>
            {props.children}
        </UserContext.Provider>
    )
}

export  {UserContextProvider, UserContext}