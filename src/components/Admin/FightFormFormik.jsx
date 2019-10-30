import React, { useState, useContext } from 'react'
import FighterForm from "Components/Admin/FighterForm";
import styled from 'styled-components'
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
    addFighterHandler(formValues)
  }

  return (
    
    <FormContainer>
      <Button onClick={handleSubmit}>Submit</Button>
      <FighterForm onChange={handleFormAChange} />
      <FighterForm onChange={handleFormBChange} />
      {/* <Fighter2Form onChange={handleFormBChange} /> */}
    </FormContainer >
  );
}

export default FightFormFormik