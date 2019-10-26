import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from './freakfight_logo22.svg';
import Authorization from 'components/Navigation/Authorization/Authorization';
import FirebaseContext from 'firebase/context';

const Nav = styled.div`
{
	display: flex;
	justify-content: space-between;
	align-content: center;
	height: 80px;
	background-color: black;
	color: white;
	width: 100%;
}
`;
const LogoStyle = styled.div`
{
	padding: 10px;
}
`;
const NavigationLinks = styled.div`
{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	color: white !important;
	padding-right: 10px;
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
		<Nav>
				<LogoStyle>
					<Link to='/'><Logo /></Link>
				</LogoStyle>
				<NavigationLinks>
						<NavlinkPad>
							<Link to ='/admin'>Admin</Link>
						</NavlinkPad>
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
