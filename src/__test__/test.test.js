import React, {useContext, Component} from 'react'
import { render, fireEvent, waitForElement, wait , cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import styled from 'styled-components'
import FightFormFormik from 'components/Admin/FightFormFormik'
import FighterForm from 'components/Admin/FighterForm'
import App from 'App.js'
import  {useFirebase, Provider } from 'Firebase/FreakFight/index'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { JestEnvironment } from '@jest/environment'
import { Store } from 'tough-cookie'

afterAll(cleanup)
beforeEach(()=>{
	jest.resetModules()
})

// const renderComponent = ({category})=>{
// 	return render(<Component.Provider value = {new Store()}><Component category={category}/></Component.Provider>)
// }

test('should render navigation ', () => {

	// const {queryByText, getByText} = renderComponent({category : value})
	
	const { getByText, getByTestId, container } = render(<Provider><App /></Provider> );


  expect(getByText('KTO WYGRA?')).toBeInTheDocument();
  // expect(getAllByText('Kto wygra')).toContain('Zaloguj się');
  
})

test('shouldDisplay Form', async () => {
  const tree = <FighterForm/>
const {getByText , getByTestId , container} = render(tree)
	fireEvent.click(getByText("Fighter nick."));
 await wait(()=> expect(getByTestId('fighterNick')).toHaveTextContent('Fighter nick.'))
})



// toHaveTextContent = check for containnig string



