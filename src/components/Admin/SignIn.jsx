import { withFormik } from "formik";
import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';
import FighterForm from "./Old forms/FighterFormOld";


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

const LoginContainer = styled.div`
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

const SignIn = () => {

  const [ credentials , setCredentials ] = useState({email: '', password:''});

  const handleChange =(e)=>{
    console.log(e.target.id)
    setCredentials({[e.target.id]: e.target.value, ...credentials})
  }

  return (
   
      <LoginContainer>
      <FormGroupContainer className="formgroupcontainer">
        <Label for="nick">Email.</Label>
        <Input
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
          type="password"
          name="password"
          id="password"
          value={credentials.pass}
          onChange={handleChange}
          required
        />
      </FormGroupContainer>
    </LoginContainer>
  )
}

export default SignIn


// function handleFormBChange(values) {
//   setFormValues({
//     ...formValues,
//     fighter2: values
//   });
// }

// const { values, handleChange, onChange } = props;
// // console.log(values)
// React.useEffect(() => {
//   if (onChange) {
//     onChange(values);
//   }
// }, [values]);
