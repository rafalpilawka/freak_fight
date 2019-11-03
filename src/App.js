import React, { useState, useRef } from 'react';
import 'App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import Navigation from 'components/FreakFight/Footer/Navigation/Navigation';
import FightsList from 'components/FreakFight/FightsList/FightsList';
import styled from 'styled-components';
import Footer from 'components/FreakFight/Footer/Footer';
import Admin from 'components/Admin/Admin';
import {Burger , Menu} from 'components/FreakFight/Footer/Navigation/Menu/Menu'

const RootAppStyle = styled.div`{
	display: grid;
	grid-template-rows: 80px auto 40px;
	background-color: black;
	grid-template-columns: auto;
	font-size: 6px;
	@media only screen and (min-width: 400px ) {
		font-size: 8px;
	}
	@media only screen and (min-width: 850px) {
		font-size: 18px;
	}
}
`;

function App() {
	const [open, setOpen] = React.useState(false);
	const node = React.useRef();
	return (
		<div className="App">
			<Router>
				<RootAppStyle>
				<Navigation />
				<Switch>
					<Route exact path="/" component={FightsList} />
					<Route exact path="/heroes" />
					<Route exact path='/admin' component={Admin} />
					<Route exact path="/archive" />
				</Switch>
				<Footer />
				<div ref={node}>
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</div>
				</RootAppStyle>
			</Router>
		</div>
	);
}

export default App;
