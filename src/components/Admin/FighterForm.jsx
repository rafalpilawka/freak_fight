import { withFormik } from "formik";
import React from "react";
import styled from 'styled-components'
import { Form, FormGroup, Label, Button } from 'reactstrap';

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
function FighterForm(props) {
  const { values, handleChange, onChange } = props;
  // console.log(values)
  React.useEffect(() => {
    if (onChange) {
      onChange(values);
    }
  }, [values]);

  return (
    <div className="form">
      <FighterContainer className="fighterContainer">
        <FormGroupContainer className="formgroupcontainer">
          <Label for="nick">Fighter nick.</Label>
          <Input
            type="text"
            name="nick"
            id="nick"
            value={values.nick}
            onChange={handleChange}
            required
          />
        </FormGroupContainer>
        <FormGroupContainer>
          <Label for="name">values name.</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </FormGroupContainer>
        <FormGroupContainer>
          <Label for="fighter1Photo">Fighter weight.</Label>
          <Input
            type="text"
            name="weight"
            id="weight"
            value={values.weight}
            onChange={handleChange}
          />
        </FormGroupContainer>
        <FormGroupContainer>
          <Label for="height">Fighter height.</Label>
          <Input
            type="text"
            name="height"
            id="height"
            value={values.height}
            onChange={handleChange}
          />
        </FormGroupContainer>
        <FormGroupContainer>
          <Label for="last_fight">Fighter last fight.</Label>
          <Input
            type="text"
            name="last_fight"
            id="last_fight"
            value={values.last_fight}
            onChange={handleChange}
          />
        </FormGroupContainer>
        <FormGroupContainer>
          <Label for="fighterIMg">Fighter photo.</Label>
          <Input
            type="text"
            name="fighterImg"
            id="fighterImg"
            value={values.fighterImg}
            onChange={handleChange}
          />
        </FormGroupContainer>
      </FighterContainer>
    </div>

  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      name: '',
      nick: '',
      weight: '',
      height: '',
      last_fight: '',
      fighterImg: ''
    };
  }
})(FighterForm);




