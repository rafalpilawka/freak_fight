import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Label, Button } from 'reactstrap';
import { FighterContext } from 'Components/Admin/Context/FighterContext'


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

const FighterForm = ({id}) => {
 
  const store  = useContext(FighterContext)
  const fighter = store[`${id}`]
  const setFighter = store[`set${id}`]

  // const [fighter, setFighter] = useState(
  //   {
  //     name: '',
  //     nick: '',
  //     weight: '',
  //     height: '',
  //     last_fight:'',
  //     fighterImg:''
  //   }
  // )

  // console.log(fighterId)
  
  const updateFighterHandler = e => {
    e.preventDefault();
    const edit = { ...fighter };
    edit[e.target.id] = e.target.value;
    setFighter({ ...edit });
  };

  return (
    <>
      <Form> 

    <FighterContainer className="fighterContainer">
      <FormGroupContainer className="formgroupcontainer">
        <Label for="nick">Fighter nick.</Label>
        <Input
          type="text"
          name="nick"
          id="nick"
          value={fighter.nick}
          onChange={updateFighterHandler.bind(this)}
          required
        />
      </FormGroupContainer>
      <FormGroupContainer>
        <Label for="name">Fighter name.</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={fighter.name}
          onChange={updateFighterHandler.bind(this)}
        />
      </FormGroupContainer>
      <FormGroupContainer>
        <Label for="fighter1Photo">Fighter weight.</Label>
        <Input
          type="text"
          name="weight"
          id="weight"
          value={fighter.weight}
          onChange={updateFighterHandler.bind(this)}
        />
      </FormGroupContainer>
      <FormGroupContainer>
        <Label for="height">Fighter height.</Label>
        <Input
          type="text"
          name="height"
          id="height"
          value={fighter.height}
          onChange={updateFighterHandler.bind(this)}
        />
      </FormGroupContainer>
      <FormGroupContainer>
        <Label for="last_fight">Fighter last fight.</Label>
        <Input
          type="text"
          name="last_fight"
          id="last_fight"
          value={fighter.last_fight}
          onChange={updateFighterHandler.bind(this)}
        />
      </FormGroupContainer>
      <FormGroupContainer>
        <Label for="fighterIMg">Fighter photo.</Label>
        <Input
          type="text"
          name="fighterImg"
          id="fighterImg"
          value={fighter.fighterImg}
          onChange={updateFighterHandler.bind(this)}
        />
      </FormGroupContainer>
    </FighterContainer>
    </Form> 
    </>
     
  )
}

export default FighterForm


