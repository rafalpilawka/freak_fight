import styled from 'styled-components';
import React, { useState, useContext, useEffect } from 'react';
import FirebaseContext from 'Firebase/FreakFight/context';

const LoginStatusContainer = styled.div`
	 {
		display: flex;
		align-items: center;
		justify-content: center;
		justify-items: center;
		cursor: pointer;
		font-family: 'Roboto Mono', monospace;
		text-transform: uppercase;
	}
`;

const BtnFacebook = styled.button`
    width: 135px;
    height:35px;  
    border-radius: 4px;
    background: #3b5998;
    color:white;
    border:0px transparent;  
    text-align: center;
    margin:5px;
    display: inline-block;

    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }

		@media only screen and (max-width : 600px) {
        width: 250px;
				height: 45px;
				font-size: 15px;
    }
`;

const AuthorizationContainer = () => {
	const { auth, doSignInWithFacebook, doSignOut, addUserToDB } = useContext(FirebaseContext);
	const [userAuth, setUserAuth] = useState(() => auth.currentUser);

	useEffect(() => {
		const authVar = auth.onAuthStateChanged(function(user) {
			if (user) {
				setUserAuth(true);
			} else {
				setUserAuth(false);
			}
		});
	});

	const signInWithFacebook = () => {
		if (!auth.currentUser) {
			doSignInWithFacebook()
				.then(socialAuthUser => {
        console.log("TCL: signInWithFacebook -> socialAuthUser", socialAuthUser)
					 addUserToDB(socialAuthUser.user);
					 })
					// .then(setUserAuth(true))
				.catch(err => console.log(err));
		} else {
			doSignOut()
				.then(res => setUserAuth(false))
				.catch(err => console.log(err));
		}
	};

	return (
		<LoginStatusContainer onClick={signInWithFacebook}>
				{userAuth ? 
				<BtnFacebook >&nbsp;&nbsp;Logout</BtnFacebook >
				: <BtnFacebook >&nbsp;&nbsp;Sign In with Facebook</BtnFacebook >}
		</LoginStatusContainer>
	);
};

export default AuthorizationContainer;
