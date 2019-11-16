import React, { useState } from 'react';
import FighterForm from 'components/Admin/FighterForm';
import styled from 'styled-components';
import { useFirebase } from 'Firebase/FreakFight/index';

const FormContainer = styled.div`
	 {
		align-items: center;
		justify-content: space-between;
		heigth: 500px;
		width: 100%;
		margin-top: 20px;
	}
`;

const ButtonContainer = styled.button`
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

const ItemContainer = styled.div`
	 {
		justify-self: stretch;
		justify-content: center;
		align-items: center;
		& p {
			text-align: center;
			justify-content: center;
			padding: 0px !important;
			color: white;
			heigth: 100%;
			font-size: 2em;
		}
	}
`;

const FightFormFormik = () => {
	const initialState = {
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
	};

	const [formValues, setFormValues] = useState(initialState);
	const { addFighterHandler } = useFirebase();
	const [reset, setReset] = useState(false);

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

	const handleSubmit = () => {
		addFighterHandler(formValues);
		setFormValues({ ...initialState });
		setReset(!reset);
	};

	return (
		<FormContainer>
			<FightersContainer>
				<ItemContainer>
					<p data-testid="fighter">FIGHTER ONE</p>
				</ItemContainer>
				<ItemContainer>
					<p>FIGHTER TWO</p>
				</ItemContainer>
				<ItemContainer>
					<FighterForm onChange={handleFormAChange} reset={reset} />
				</ItemContainer>
				<ItemContainer>
					<FighterForm onChange={handleFormBChange} reset={reset} />
				</ItemContainer>
				<ButtonContainer className="submit_button" onClick={handleSubmit}>
					Add Fight
				</ButtonContainer>
			</FightersContainer>
		</FormContainer>
	);
}

export default FightFormFormik;
