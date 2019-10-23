import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import FightsList from './components/FightsList/FightsList';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';


const AppStyle = styled.div`
	 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
	}
`;

function App() {
	return (
		<div className="App">
			<Router>
				<Navigation />
				<Switch>
					<AppStyle>
						<div id="modal" />
						<Route exact path="/" component={FightsList} />
					</AppStyle>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
