import React from 'react';
import styled from 'styled-components';
import Authorization from 'components/Navigation/Authorization/Authorization';
import { Link } from 'react-router-dom';

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-transform: uppercase;
	background: white;
	transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(-100%)')};
	height: 100vh;
	text-align: left;
	position: absolute;
	top: 0;
	right: 0;
	transition: transform 0.3s ease-in-out;
	z-index: 998;

	@media (max-width: 576px) {
		width: 100%;
	}

	a {
		text-transform: uppercase;
		letter-spacing: 0.5rem;
		color: #0d0c1d;
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: 576px) {
			font-size: 1rem;
			text-align: center;
		}
		&:hover {
			color: #343078;
		}
	}
`;

const NavigationList = styled.div`
	 {
		padding: 60px;
		padding-left: 30px;
		padding-right: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		font-size: 20px;
		font-family: 'Roboto Mono', monospace;
		& div {
			padding: 32px;
		}
		& a {
			font-size: 20px;
			padding: 32px;
			text-align: center;
		}
	}
`;

export const Menu = ({ open, setOpen }) => {
	return (
		<StyledMenu open={open}>
			<NavigationList>
				<Authorization onClick={() => setOpen(!open)} />
				<Link to="/" onClick={() => setOpen(!open)}>
					Main
				</Link>
				<Link to="/archives" onClick={() => setOpen(!open)}>
					Archiwum
				</Link>
				<Link to="/heroes" onClick={() => setOpen(!open)}>
					Hero
				</Link>
			</NavigationList>
		</StyledMenu>
	);
};

const StyledBurger = styled.button`
	position: absolute;
	top: 1.5rem;
	right: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 999;

	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${({ open }) => (open ? '#0D0C1D' : '#EFFFFA')};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}
		:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
		}
		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}

	@media only screen and (min-width: 700px) {
		display: none;
	}
`;

export const Burger = ({ open, setOpen }) => {
	return (
		<StyledBurger
			className="styled-burger"
			open={open}
			onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

const useOnClickOutside = (ref, handler) => {
	React.useEffect(
		() => {
			const listener = event => {
				if (!ref.current || ref.current.contains(event.target)) {
					return;
				}
				handler(event);
			};
			document.addEventListener('mousedown', listener);

			return () => {
				document.removeEventListener('mousedown', listener);
			};
		},
		[ref, handler]
	);
};
