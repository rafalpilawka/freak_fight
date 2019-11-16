import React from 'react';
import {
	render,
	fireEvent,
	waitForElement,
	wait,
	cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import styled from 'styled-components';
import FightFormFormik from 'components/Admin/FightFormFormik';
import FighterForm from 'components/Admin/FighterForm';
import App from 'App.js';
// import * as Firebase from 'firebase'
import { useFirebase, Provider } from 'Firebase/FreakFight/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { JestEnvironment } from '@jest/environment';
import List from 'components/FreakFight/FightsList/List';
import Navigation from 'components/Navigation/Navigation';
import Authorization from 'components/Navigation/Authorization/Authorization';

afterAll(cleanup);
beforeEach(() => {
	jest.resetModules();
});

const renderComponent = ({ component }) => {
	return render(
		<Provider>
			{component}
		</Provider>
	);
};

test('should render navigation ', () => {
	// const {queryByText, getByText} = renderComponent({category : value})
	const { getByText, getByTestId, container } = renderComponent({
		component: <App />
	});
	expect(getByTestId('freakfight_logo')).toBeInTheDocument();
	expect(getByText('KTO WYGRA?')).toBeInTheDocument();
	// expect(getAllByText('Kto wygra')).toContain('Zaloguj się');
});

test('shouldDisplay Form', async () => {
	const {
		getByText,
		getAllByLabelText,
		container,
		asFragment
	} = renderComponent({ component: <FightFormFormik /> });
	const forms = getAllByLabelText(/fighter Nick./i);
	const form = forms[0];
	const vakluesArray = ['raf', 'pil', 'norman'];
	const submit = getByText(/Add fight/i);

	vakluesArray.forEach(item => {
		wait(fireEvent.change(form, { target: { value: item } }));
		wait(expect(form).toHaveValue(item));
		// expect(asFragment()).toMatchSnapshot();
		// fireEvent.click(submit)
		// wait(() => expect(form).toHaveValue(''))
	});
	// fireEvent.focus(form);
});

test('presence of logo in nav compoennt', () => {
	const { getByText, getByTestId, container } = renderComponent({
		component: <App />
	});
	const logo = getByTestId(/freakfight_logo/i);
	expect(logo).toBeTruthy();
});

// fights, votedMatrix, fireModal
// RENDER FIGHTS LIST FROM DATA
test('renders', () => {
	const fights = [
		{
			id: '1y1glBaCdagflxUL6485',
			favFighter1: [],
			favFighter2: [],
			fighter1: {
				fighterImg:
					'https://famemma.com/app/uploads/2019/10/marcin-malczynski.png',
				height: '',
				last_fight: '',
				name: '',
				nick: 'Malczyński ',
				weight: ''
			},
			fighter2: {
				fighterImg:
					'https://famemma.com/app/uploads/2019/10/marek-hoffmann-adbuster.png',
				height: '',
				last_fight: '',
				name: '',
				nick: 'Ad buster',
				weight: ''
			},
			votesForFav: [],
			votesForWin: [
				'0skW1rqHbXhPUCaUfU7JKs0QsFW2',
				'dskJPwCpTOOjn81tViVwZldlkhR2'
			],
			winFighter1: [],
			winFighter2: [
				'0skW1rqHbXhPUCaUfU7JKs0QsFW2',
				'dskJPwCpTOOjn81tViVwZldlkhR2'
			]
		},
		{
			id: 'n332MW4XpxtFiwG10di3',
			favFighter1: [],
			favFighter2: [],
			fighter1: {
				fighterImg: 'https://famemma.com/app/uploads/2019/10/mini-majk.png',
				height: '',
				last_fight: '',
				name: '',
				nick: 'Mini majk',
				weight: ''
			},
			fighter2: {
				fighterImg: 'https://famemma.com/app/uploads/2019/10/lord-kruszwil.png',
				height: '',
				last_fight: '',
				name: '',
				nick: 'Lord Kruszwil',
				weight: ''
			},
			votesForFav: [],
			votesForWin: [
				'0skW1rqHbXhPUCaUfU7JKs0QsFW2',
				'dskJPwCpTOOjn81tViVwZldlkhR2'
			],
			winFighter1: [],
			winFighter2: [
				'0skW1rqHbXhPUCaUfU7JKs0QsFW2',
				'dskJPwCpTOOjn81tViVwZldlkhR2'
			]
		},
		{
			id: 'vABkwXA63NlIDc3LVBE8',
			favFighter1: [],
			favFighter2: [],
			fighter1: {
				fighterImg: 'https://famemma.com/app/uploads/2019/10/bonus.png',
				height: '',
				last_fight: '',
				name: '',
				nick: 'BONUS BGC',
				weight: ''
			},
			fighter2: {
				fighterImg: 'https://famemma.com/app/uploads/2019/10/najman.png',
				height: '',
				last_fight: '',
				name: '',
				nick: 'Najman',
				weight: ''
			},
			votesForFav: [],
			votesForWin: [
				'0skW1rqHbXhPUCaUfU7JKs0QsFW2',
				'dskJPwCpTOOjn81tViVwZldlkhR2'
			],
			winFighter1: [],
			winFighter2: [
				'0skW1rqHbXhPUCaUfU7JKs0QsFW2',
				'dskJPwCpTOOjn81tViVwZldlkhR2'
			]
		}
	];
	const { asFragment } = render(
		<Provider>
			<List fights={fights} votedMatrix={[]} fireModal={() => false} />
		</Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});

test('insert text in h1', () => {
	const { getByTestId, getByText } = render(
		<h1 className="h1tag" data-testid="h1tag">
			Text
		</h1>
	);
	expect(getByTestId('h1tag')).toHaveTextContent('Text');
	expect(getByText('Text')).toHaveClass('h1tag');
});

test('render navigation depends on auth status', () => {
	const { getByText, getByTestId } = renderComponent({
		component: (
			<Router>
				<Navigation />
			</Router>
		)
	});

	expect(getByTestId('heroes_main')).toHaveTextContent('Heroes');
});

test('authorization test', () => {
	// Firebase.doSignInWithFacebook({ currentUser: { greeting: "hello there" } });
	const { getByText, getByTestId, queryByText } = renderComponent({
		component: <Authorization />
	});
	const LogButton = getByTestId(/auth_button/i);
	expect(LogButton).toHaveTextContent;
	expect(getByText(/Zaloguj się/i)).toBeInTheDocument();
	// console.log("TCL: LogButton", LogButton)

	// wait(fireEvent.click(LogButton));
	// const logStatus = await waitForElement(() => getByText('Wyloguj się'))
	// expect(queryByText(/Wyloguj się/i)).toBeInTheDocument()
});

// toHaveTextContent = check for containnig string
