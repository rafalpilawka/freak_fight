import React, { useContext, useState, useEffect, createContext } from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import styled from 'styled-components';
import FirebaseContext from 'Firebase/FreakFight/context'
import FighterContextProvider from 'Components/Admin/Context/FighterContext'
import {FighterContext} from 'Components/Admin/Context/FighterContext'
import FighterForm from 'Components/Admin/FighterForm';
import {Route} from 'react-router-dom'
import { statement } from '@babel/template';
import { Store } from 'tough-cookie';

const FormContainer = styled.div`
	 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		heigth: 500px;
		width: 100%;
	}
`;

const FighterContainer = styled.div`
	 {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: black;
		color: white;
		margin: 25px;
		padding: 30px;
		border-radius: 5px;
		width: 100%;
	}
`;

const SubmitContainer = styled.button`
	 {
		padding: 8px;
		font-size: 1.5rem;
		text-transform: uppercase;
		font-family: 'Teko', sans-serif;
		color: white;
		background-color: black;
		border-radius: 5px;
		position: relative;

		&:hover {
			background-color: darkred;
			color: #fdec6e;
			box-shadow: 0px 0px 5px #fdec6e;
			-moz-transition: all 0.2s ease-in;
			-o-transition: all 0.2s ease-in;
			-webkit-transition: all 0.2s ease-in;
			transition: all 0.1s ease-in;
		}
	}
`;

const Input = styled.input`
	font-size: 16px;
	border: solid 1px #dbdbdb;
	border-radius: 3px;
	color: #262626;
	padding: 7px 33px;
	border-radius: 3px;
	color: #999;
	cursor: text;
	font-size: 1.5rem;
	font-weight: 300;
	text-align: center;
	background: #fafafa;
	&:active,
	&:focus {
		text-align: left;
		outline: none !important;
		border: 1px solid red;
		box-shadow: 0 0 10px red;
	}
`;

const FormGroupContainer = styled.div`
	 {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		padding: 10px;
		flex-grow: 1;
		flex-basis: 1;
		text-transform: uppercase;
		font-family: 'Teko', sans-serif;
		font-size: 1.5rem;
	}
`;

const Admin = () => {

	// const {fighter1, fighter2} = useContext(FighterContext)

	const [fight, setFight] = useState({
		favFighter: [],
		favFighter: [],
		fighter1: {},
		fighter2: {},
		votesForFav: [],
		votesForWin: [],
		winFighter1: [],
		winFighter2: []
  });

	const updateFightHandler = e => {
    e.preventDefault();
    console.log(fight[`${e.target.id}`])
    const edit = { ...fight };
		edit[e.target.id] = e.target.value;
    setFight({ ...edit });
	};

	const addFightSubmit = e => {

    e.preventDefault();
		console.log(fight)
		
		// addFighterHandler(fight);
		// setFight(
		// 	{
		// 		favFighter: [],
		// 		favFighter: [],
		// 		fighter1: {},
		// 		fighter1Photo: '',
		// 		fighter2: {},
		// 		fighter2Photo: '',
		// 		votesForFav: [],
		// 		votesForWin: [],
		// 		winFighter1: [],
		// 		winFighter2: []
		// 	},
		// );
  };
  
  const formHelper = (fighter, data) =>{
    console.log('zz99', fighter, data)
    setFight({
      ...fight,
      [`${fighter}`]: data
    })
  }

	return (
		<Form style={{ width: '50%' }}>
			<FormContainer className="FormContainer">
				<SubmitContainer onClick={addFightSubmit.bind(this)}>
					Add fight
				</SubmitContainer>
				<FighterContextProvider >	
				 	<FighterForm id='fighter1'/>
				</FighterContextProvider>
				<FighterContextProvider >	
				 	<FighterForm id='fighter2'/>
				</FighterContextProvider>
			</FormContainer>
		</Form>

	);
};

export default Admin;
