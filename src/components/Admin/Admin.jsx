import React, { useContext, useState, useEffect } from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import styled from 'styled-components';
import FirebaseContext from 'firebase/context';
import FighterForm from 'components/Admin/FighterForm'


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
	const [fight, setFight] = useState({
		favFighter: [],
		favFighter: [],
		fighter1: {},
		fighter1Photo: '',
		fighter2: {},
		fighter2Photo: '',
		votesForFav: [],
		votesForWin: [],
		winFighter1: [],
		winFighter2: []
  });
  // const {name , nick , weight, height, last_fight} = fight.fighter
	const { addFighterHandler } = useContext(FirebaseContext);

	const updateFightHandler = e => {
    e.preventDefault();
    console.log(fight[`${e.target.id}`])
    const edit = { ...fight };
		edit[e.target.id] = e.target.value;
    setFight({ ...edit });

	};

	const addFightSubmit = e => {
		e.preventDefault();
		addFighterHandler(fight);
		setFight(
			{
				favFighter: [],
				favFighter: [],
				fighter1: {},
				fighter1Photo: '',
				fighter2: {},
				fighter2Photo: '',
				votesForFav: [],
				votesForWin: [],
				winFighter1: [],
				winFighter2: []
			},
		);
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
				{/* <FighterContainer className="fighterContainer">
					<FormGroupContainer className="formgroupcontainer">
						<Label for="fighter1nick">Fighter nick</Label>
						<Input
							type="text"
							name="fighter1nick"
							id='fighter1.nick'
							value={fight.fighter1.name}
							onChange={updateFightHandler.bind(this)}
							required
						/>
					</FormGroupContainer>
					<FormGroupContainer>
						<Label for="fighter1name">Fighter name</Label>
						<Input
							type="text"
							name="fighter1name"
							id="fighter1.name"
							value={fight.fighter1.name}
							onChange={updateFightHandler.bind(this)}
						/>
					</FormGroupContainer>
					<FormGroupContainer>
						<Label for="fighter1height">Fighter height</Label>
						<Input
							type="text"
							name="fighter1height"
							id="fighter1.height"
							value={fight.fighter1.height}
							onChange={updateFightHandler.bind(this)}
						/>
					</FormGroupContainer>
					<FormGroupContainer>
						<Label for="fighter1weight">Fighter weight</Label>
						<Input
							type="text"
							name="fighter1weight"
							id="fighter1.weight"
							value={fight.fighter1.weight}
							onChange={updateFightHandler.bind(this)}
						/>
					</FormGroupContainer>
					<FormGroupContainer>
						<Label for="fighter1last_fight">Fighter last fight</Label>
						<Input
							type="text"
							name="fighter1last_fight"
							id="fighter1.last_fight"
							value={fight.fighter1last_fight}
							onChange={updateFightHandler.bind(this)}
						/>
					</FormGroupContainer>


          <FormGroupContainer>
            <Label for="fighter1Photo">Fighter Img src</Label>
            <Input
              type="text"
              name="fighter1IMG"
              id="fighter1Photo"
              value={fight.fighter1Photo}
              onChange={updateFightHandler.bind(this)}
            />
          </FormGroupContainer>
				</FighterContainer> */}

				 {/* <FighterContainer>
					<FormGroupContainer>
						<Label for="fighter2">Fighter 2</Label>
						<Input
							type="text"
							name="fighter2"
							id="fighter2"
							value={fight.fighter2}
							onChange={updateFightHandler.bind(this)}
							required
						/>
					</FormGroupContainer>
					<FormGroupContainer>
						<Label for="fighter2Photo">Fighter 2 Img src</Label>
						<Input
							type="text"
							name="fighter2Photo"
							id="fighter2Photo"
							value={fight.fighter2Photo}
							onChange={updateFightHandler.bind(this)}
						/>
					</FormGroupContainer>
				</FighterContainer> */}
				<SubmitContainer onClick={addFightSubmit.bind(this)}>
					Add fight
				</SubmitContainer>

        <FighterForm formHelper={formHelper} fighterId={'fighter1'}></FighterForm> 
        <FighterForm formHelper={formHelper} fighterId={'fighter2'}></FighterForm> 
			</FormContainer>
		</Form>
	);
};

export default Admin;
