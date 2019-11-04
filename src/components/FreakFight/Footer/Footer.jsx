import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	${'' /* height: 60px; */}
	${'' /* position: fixed; */}
	bottom: 0;
	width: 100%;
p {
	padding-left: 20px;
	padding-right: 20px;
	}
}
`;

const FooterContainer = () => {
	return (
		<Footer>
			<p>&copy; Copyright 2019 </p>
			<p>Freak Fight</p>
		</Footer>
	);
};

export default FooterContainer;
