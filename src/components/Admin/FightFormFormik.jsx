import React, { useState, useContext } from 'react';
import FighterForm from 'Components/Admin/FighterForm';
import styled from 'styled-components';
import FirebaseContext from 'Firebase/FreakFight/context';

const FormContainer = styled.div`
	 {
		align-items: center;
		justify-content: space-between;
		heigth: 500px;
		width: 90%;
		margin-top: 20px;
	}
`;
const Button = styled.button`
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

const FightersContainer = styled.div`
	 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 2em;
		justify-items: center;
		& .submit_button {
			grid-column: 1/3;
			margin: 15px;
		}
	}
`;

const Item = styled.div`
	 {
		justify-self: stretch;
		justify-content: center;
		align-items: center;

		& p {
			text-align: center;
			justify-content: center;
			padding: 0px;
		}
	}
`;

function FightFormFormik() {
	const [formValues, setFormValues] = useState({
		favFighter1: [],
		favFighter2: [],
		fighter1: {
			name: '',
			nick: '',
			weight: '',
			height: '',
			last_fight: '',
			fighterImg: ''
		},
		fighter2: {
			name: '',
			nick: '',
			weight: '',
			height: '',
			last_fight: '',
			fighterImg: ''
		},
		votesForFav: [],
		votesForWin: [],
		winFighter1: [],
		winFighter2: []
	});

	const { addFighterHandler } = useContext(FirebaseContext);

	function handleFormAChange(values) {
		setFormValues({
			...formValues,
			fighter1: values
		});
	}

	function handleFormBChange(values) {
		setFormValues({
			...formValues,
			fighter2: values
		});
	}

	function handleSubmit() {
		alert(JSON.stringify(formValues, null, 2));
		addFighterHandler(formValues);
	}

	return (
		<FormContainer>
			<FightersContainer>
				<Item>
					<p>FIGHTER ONE</p>
				</Item>
				<Item>
					<p>FIGHTER TWO</p>
				</Item>
				<Item>
					<FighterForm onChange={handleFormAChange} />
				</Item>
				<Item>
					<FighterForm onChange={handleFormBChange} />
				</Item>
				<Button className="submit_button" onClick={handleSubmit}>
					Add Fight
				</Button>
			</FightersContainer>
		</FormContainer>
	);
}

export default FightFormFormik;
