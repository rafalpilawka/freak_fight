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

const Button = styled.div`
	 {
		
	}
`;

const AuthorizationContainer = () => {
	const { auth, doSignInWithFacebook, doSignOut } = useContext(FirebaseContext);
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
				.then(socialAuthUser => setUserAuth(true))
				.catch(err => console.log(err));
		} else {
			doSignOut()
				.then(res => setUserAuth(false))
				.catch(err => console.log(err));
		}
	};

	return (
		<LoginStatusContainer onClick={signInWithFacebook}>
				{userAuth ? 'LogOut' : 'Log in'}
		</LoginStatusContainer>
	);
};

export default AuthorizationContainer;
