import React, { useContext, useState } from 'react';
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

const AuthorizationContainer = (props) => {


    console.log(props)
    const { userStatus, setUserStatus } = useContext(UserContext);
    const { auth, doSignInWithFacebook, doSignOut} = useContext(FirebaseContext)

    const signInWithFacebook=()=>{

        if(!auth.currentUser){
            doSignInWithFacebook().then(socialAuthUser => setUserStatus({ userStatus: auth.currentUser })).catch(err => console.log(err))
        }else{
            doSignOut().then(res =>{ console.log(res);setUserStatus({ userStatus: false})}).catch(err=>console.log(err))
        }
    }
    
        return (
            <LoginStatusContainer>
                        <Button onClick={signInWithFacebook} >
                    {auth.currentUser ? 'You are signedIn' : 'Log in' }
                        </Button>
            </LoginStatusContainer>
        );
}

export default AuthorizationContainer;