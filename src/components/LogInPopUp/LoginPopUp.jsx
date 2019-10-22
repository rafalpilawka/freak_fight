// import Authorization from 'components/Navigation/Authorization/Authorization'
import React, {useContext} from 'react';
import styled from 'styled-components'
import FirebaseContext from '../../firebase/context'
// import {UserContext} from '../../context/userContext'

const Facebook = styled.button`{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}`


const PopUp = styled.div`{
      display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:50%;
    height: 50%;
    position: absolute;
    z-index: 999;
}`

const LoginPopUp = () => {
    const { auth, doSignInWithFacebook} = useContext(FirebaseContext)
    // const {userStatus , setUserStatus} = useContext(UserContext)
 
    return (
    <PopUp>
    <p>Jeśli chcesz oddac głos</p>
        <div>Nie jestes zalogowany</div>

        {/* <Facebook onClick={doSignInWithFacebook().then(socialAuthUser => setUserStatus({ userStatus: auth.currentUser })).catch(err => console.log(err))}>
        Zaloguj</Facebook> */}

    </PopUp>   
    )
}

export default LoginPopUp
