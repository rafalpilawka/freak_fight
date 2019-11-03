import { withFormik } from 'formik';
import React, { useState, useEffect, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Form, FormGroup, Label, Input } from 'reactstrap';
// import FighterForm from './Old forms/FighterFormOld';
import Firebase, { FirebaseContext } from 'Firebase/FreakFight/index';

const ButtonContainer = styled.button`
	 {
		padding: 2px 8px;
		font-size: 1.2rem;
		text-transform: uppercase;
		font-family: 'Teko', sans-serif;
		color: white;
		background-color: red;
		position: relative;
		margin: 20px;

		&:hover {
			color: #fdec6e;
			box-shadow: 0px 0px 5px #fdec6e;
			-moz-transition: all 0.2s ease-in;
			-o-transition: all 0.2s ease-in;
			-webkit-transition: all 0.2s ease-in;
			transition: all 0.1s ease-in;
		}
	}
`;

const FormGroupContainer = styled.div`
	 {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		flex-grow: 1;
		flex-basis: 1;
		text-transform: uppercase;
		font-family: 'Teko', sans-serif;
		font-size: 1.5rem;

		&input {
			background-color: black !important;
		}
	}
`;

const LoginContainer = styled.div`
	 {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: black;
		color: white;
		margin: 25px;
		width: 100%;
		height: 40%;
	}
`;

const SignIn = () => {
	const [credentials, setCredentials] = useState({ email: '', password: '' });
	const { signInAdmin, auth } = useContext(FirebaseContext);

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.id]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		signInAdmin(credentials);
	};

	return (
		<LoginContainer>
			<h3>
				{'Login as admin for adding content'.toUpperCase()}
			</h3>
			<FormGroupContainer className="formgroupcontainer">
				<Label for="nick">Email.</Label>
				<Input
					style={{
						width: '20%',
						height: '40px',
						fontSize: '1em',
						color: 'grey'
					}}
					className="input"
					type="email"
					name="email"
					id="email"
					value={credentials.name}
					onChange={handleChange}
					required
				/>
			</FormGroupContainer>
			<FormGroupContainer>
				<Label for="name">Password.</Label>
				<Input
					style={{
						width: '20%',
						height: '40px',
						fontSize: '1em',
						color: 'grey'
					}}
					type="password"
					name="password"
					id="password"
					value={credentials.pass}
					onChange={handleChange}
					required
				/>
			</FormGroupContainer>
      <ButtonContainer onClick={handleSubmit}>Login</ButtonContainer>
		</LoginContainer>
	);
};

export default SignIn;
