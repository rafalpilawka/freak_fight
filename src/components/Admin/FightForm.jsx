import React, { useContext, useEffect } from 'react';
import { FightContext } from 'Components/Admin/Context/FightContext';
import { FighterContext } from 'Components/Admin/Context/FighterContext';
import { Form } from 'reactstrap';
import styled from 'styled-components';
import FirebaseContext from 'Firebase/FreakFight/context';

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

const FightForm = props => {
	const { addFighterHandler } = useContext(FirebaseContext);
	const { fight, setFight } = useContext(FightContext);
	const { fighter1, fighter2, setfighter1, setfighter2 } = useContext(
		FighterContext
	);

	useEffect(
		() => {
			addFighterHandler(fight);
		},
		[fight]
	);

	const updateFightHandler = e => {
		e.preventDefault();
		const edit = { ...fight };
		edit[e.target.id] = e.target.value;
		setFight({ ...edit });
	};

	const addFightSubmit = async e => {
		e.preventDefault();
		const edit = { ...fight };
		edit.fighter1 = fighter1;
		edit.fighter2 = fighter2;
		setfighter1({
			name: '',
			nick: '',
			weight: '',
			height: '',
			last_fight: '',
			fighterImg: ''
		});
		setfighter2({
			name: '',
			nick: '',
			weight: '',
			height: '',
			last_fight: '',
			fighterImg: ''
		});
		setFight({ ...edit });
	};

	return (
		<Form style={{ width: '50%' }}>
			<FormContainer className="FormContainer">
				<SubmitContainer onClick={addFightSubmit.bind(this)}>
					Add fight
				</SubmitContainer>
				{props.children}
			</FormContainer>
		</Form>
	);
};

export default FightForm;
