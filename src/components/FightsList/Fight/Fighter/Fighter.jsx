import React, {  useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import FirebaseContext from 'firebase/context';


const Fighter = styled.div`
	 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: lightgrey;
		color: white;
		flex-basis: 300px;
		width: 40%;
		heigth: 100%;
		flex-grow: 4;
		flex-direction: column;
	}
`;

const FighterImage = styled.img`
	 {
		background: ${props => `url(${props.imgUrl}) no-repeat center` };
		background-size: cover;
		display: flex;
		width: 300px;
		height: 300px;
		background-color: grey;
		object-fit: cover;
		margin-top: 10px;
	}
`;

const FighterDescription = styled.div`
	 {
		position: relative;
		text-align: center;
    height:100%;
		top: 200px;
	}
`;

const FighterControl = styled.div`
	 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		top: auto;
	}
`;
const Button = styled.div`
	 {
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		position: relative;
		top: -1vh;
		background-color: black;
		color: white;
		border: 1px solid black;
		text-align: center;
		vertical-align: middle;
		margin-left: 10px;
		margin-right: 10px;
		width: 50px;
		cursor: pointer;
		padding: 4px;
	}
`;
const Buttons = styled.div`
	 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}
`;

const FighterContainer = ({ fighter, modal, fightKey, fighterId, fighterPhoto }) => {
	const { auth, voteHandler } = useContext(FirebaseContext);

	const checkAuthAndVote = e => {
		fighter = e.target.className + fighterId;
		if (auth.currentUser) {
			try {
				voteHandler(
					'fights',
					fightKey,
					auth.currentUser.uid,
					e.target.className,
					fighterId
				);
			} catch (error) {
				console.log(error);
			}
		} else {
			modal();
		}
	};
	console.log(fighterPhoto, 'zz77')

	return (
		<Fighter>
			<FighterDescription>
				{fighter}
			</FighterDescription>
			<FighterImage imgUrl={fighterPhoto} />
			<FighterControl>
				<Buttons>
					<Button className="favoriteFighter" onClick={checkAuthAndVote}>Fav</Button>
					<Button className="winFighter" onClick={checkAuthAndVote}>Win</Button>
				</Buttons>
				<div>Favorite of </div>
				<div>Favorite of </div>
			</FighterControl>
		</Fighter>
	);
};

export default FighterContainer;
