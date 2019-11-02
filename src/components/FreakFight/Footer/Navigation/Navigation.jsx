import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'Components/FreakFight/Footer/Navigation/freakfight_logo22.svg';
import Authorization from 'Components/FreakFight/Footer/Navigation/Authorization/Authorization';
import FirebaseContext from 'Firebase/FreakFight/context';

const Nav = styled.div`
{
	display: flex;
	justify-content: space-between;
	align-content: center;
	background-color: black;
	color: white;
	width: 100%;
	@media only screen and (max-width: 700px) {
		align-content: flex-start;
	}
	
}
`;
const LogoStyle = styled.div`
{
padding: 20px;
}
`;
const NavigationLinks = styled.div`
{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	color: white ;
	padding-right: 30px;
	font-size: 1em;

	@media only screen and (max-width: 700px) {
		display: none;
	}
}
`;

const NavlinkPad = styled.div`
{
padding: 15px;

a{
	text-decoration: none;
	color: white;


	}
}
`;

const Navigation = () => {
	const { auth } = useContext(FirebaseContext);

	return (
		<Nav className='nav_bar'>
				<LogoStyle>
					<Link className='linklogo' to='/'><Logo className='logo' /></Link>
				</LogoStyle>
				<NavigationLinks>
						<NavlinkPad>
								<Link to="/archives">Arch</Link>
						</NavlinkPad>
						<NavlinkPad>
								<Link to="/heroes">Heros</Link>
						</NavlinkPad>
						<Authorization isAuth={auth.currentUser} />
				</NavigationLinks>
		</Nav>
	);
};

export default Navigation;
