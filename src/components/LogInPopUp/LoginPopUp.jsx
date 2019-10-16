// import Authorization from 'components/Navigation/Authorization/Authorization'
import React from './node_modules/react';
import styled from './node_modules/styled-components'
import FirebaseContext from './node_modules/firebase/context'


const Facebook = styled.button`{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}`

const LoginPopUp = () => {
    const { auth, doSignInWithFacebook} = useContext(FirebaseContext)
 
    return (<>
    <p>Jeśli chcesz oddac głos</p>
        
        <Facebook onClick={doSignInWithFacebook().then(socialAuthUser => setUserStatus({ userStatus: auth.currentUser })).catch(err => console.log(err))}>
        </Facebook>

    </>
        
    )
}

export default LoginPopUp
