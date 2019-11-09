import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'components/FreakFight/Footer/Navigation/freakfight_logo22.svg';
import Authorization from 'components/FreakFight/Footer/Navigation/Authorization/Authorization';
import { useFirebase } from 'Firebase/FreakFight/index';

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
	text-transform: uppercase;

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
	console.log(useFirebase)
	const { auth } = useFirebase();
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
								<Link to="/heroes">Heroes</Link>
						</NavlinkPad>
						<Authorization isAuth={auth.currentUser} />
				</NavigationLinks>
		</Nav>
	);
};

export default Navigation;
