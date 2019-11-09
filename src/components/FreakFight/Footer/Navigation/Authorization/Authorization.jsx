import styled from 'styled-components';
import React, { useState, useContext, useEffect } from 'react';
import {useFirebase} from 'Firebase/FreakFight/index';
import {ReactComponent as FBlogo} from 'components/FreakFight/Footer/Navigation/Authorization/fb_ico.svg'

const LoginStatusContainer = styled.div`
	 {
		display: flex;
		align-items: center;
		justify-content: center;
		justify-items: center;
		cursor: pointer;
		font-family: 'Roboto Mono', monospace;
		text-transform: uppercase;
		cursor: pointer;
	}
`;

const BtnFacebookContainer = styled.button`
    ${'' /* width: 135px; */}
		width: 135px;
    height:35px; 
    border-radius: 4px;
    background: #3b5998;
    color:white;
    border:0px transparent;  
    text-align: center;
    display: flex;
		justify-items: space-between;
		align-items: center;
		cursor: ponter;
		font-weight: bold;
		font-size: 14px;
		padding: 0px;
		padding-top: 0px;

    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
		& .fb{
			width: 20%;
			padding: 0;
			margin: 0px;
			padding-left: 5%;
		} 
		& p{
			height: 100%;
			width: 100%;
			margin: 0px;
			z-index: 999;
		}

		@media only screen and (max-width : 650px) {
        width: 135px;
				height: 45px;
				font-size: 17px;
				justify-items: space-between;
				& p{
					position: relative;
					text-align: left;
				}
    }
`;

const AuthorizationContainer = () => {
	const { auth, doSignInWithFacebook, doSignOut, addUserToDB } = useFirebase();
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
		} else {
			doSignOut()
				.then(res => setUserAuth(false))
				.catch(err => console.log(err));
		}
	};

	return (
		<LoginStatusContainer 
		onClick={signInWithFacebook}
		>
				{userAuth ? 
				<BtnFacebookContainer className='btnface' >
					<FBlogo className='fb'/>
					<p>&nbsp;&nbsp;Wyloguj się</p>
				</BtnFacebookContainer >
				: <BtnFacebookContainer className='btnface'>
				<FBlogo className='fb' />
				<p>&nbsp;&nbsp;Zaloguj się</p>
				</BtnFacebookContainer >}
		</LoginStatusContainer>
	);
};

export default AuthorizationContainer;
