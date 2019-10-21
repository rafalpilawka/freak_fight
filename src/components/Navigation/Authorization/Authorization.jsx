import React, { useContext, useEffect, useState } from 'react';
import {UserContext} from 'context/userContext'
import styled from 'styled-components'
import FirebaseContext from 'firebase/context';

const Button = styled.button`
{

}`
const LoginStatusContainer = styled.div`{
    display: flex;
    align-items: center;
    justify-content: center;

}`

const AuthorizationContainer = ({isAuth}) => {

    
    
    // const { userStatus, setUserStatus } = useContext(UserContext);
    const { auth, doSignInWithFacebook, doSignOut, isInitialized} = useContext(FirebaseContext)
    const [userAuth , setUserAuth] = useState(false);

    // const [messageAuth, set]

    useEffect(()=>{

    })



    const signInWithFacebook=()=>{

        if(!auth.currentUser){
            doSignInWithFacebook().then(socialAuthUser => setUserAuth({ userStatus: auth.currentUser })).catch(err => console.log(err))
        }else{
            doSignOut().then(res =>{ console.log(res); setUserAuth({ userAuth: false})}).catch(err=>console.log(err))
        }
    }
    
        return (
            <LoginStatusContainer>
                        <Button onClick={()=>console.log(auth.currentUser)}>CHeck from auth</Button>
                        <Button onClick={signInWithFacebook} >
                        {/* { userStatus ? `You are signedIn as: ${auth.currentUser.email}` : 'Log in' } */}
                        {!userAuth === false ? 'LogOut' : 'Log in' }
                        </Button>
                        {/* <Button onClick={simpleChange}>Switch</Button> */}
            </LoginStatusContainer>
        );
}

export default AuthorizationContainer;