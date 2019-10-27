import React  from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import Navigation from 'Components/FreakFight/Footer/Navigation/Navigation';
import FightsList from './Components/FreakFight/FightsList/FightsList';
import styled from 'styled-components';
import Footer from './Components/FreakFight/Footer/Footer';
import Admin from 'Components/Admin/Admin'

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
					<Route exact path="/" component={FightsList} />
					<Route exact path="/admin" component={Admin}/>
					</AppStyle>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
