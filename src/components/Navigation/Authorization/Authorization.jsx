import React, { useContext, useEffect, useState } from 'react';
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

const AuthorizationContainer = () => {

    const {  auth, doSignInWithFacebook, doSignOut } = useContext(FirebaseContext)
    const [userAuth, setUserAuth] = useState(() => auth.currentUser);


    useEffect(()=>{
            console.log('auth-999', auth)
            const authVar = auth.onAuthStateChanged(function (user) {
                if (user) {
                    setUserAuth(true)
                    console.log('tt-333', user)   }else{setUserAuth(false)}   } )
            },
            []
        );
  
    const signInWithFacebook=()=>{
        if(!auth.currentUser){
            doSignInWithFacebook().then(socialAuthUser => setUserAuth(true)).catch(err => console.log(err))
        }else{
            doSignOut().then(res => setUserAuth(false)).catch(err => console.log(err))
        }
    }
        console.log('UserAuth before -00000', userAuth)
        return (
            <LoginStatusContainer>
                        <Button onClick={()=>console.log(auth.currentUser)}>CHeck from auth</Button>
                        <Button onClick={signInWithFacebook} >
                        {userAuth ? 'LogOut' : 'Log in' }
                        </Button>
            </LoginStatusContainer>
        );
}

export default AuthorizationContainer;