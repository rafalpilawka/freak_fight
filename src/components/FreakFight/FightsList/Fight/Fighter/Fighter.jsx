import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import FirebaseContext from 'Firebase/FreakFight/context';
import { ReactComponent as WinnerLogo } from 'assets/winner.svg';
import ImageMapper from 'react-image-mapper';


const FighterWrapper = styled.div`{
		display: flex;
		flex-direction: column;
		align-items: ${props => props.justifyContent};
		width: 100%;
		height: 100%;
}`

const Fighter = styled.div`
	 {
		display: flex;
		${'' /* justify-content: flex-start; */}
		align-items: center;
		background-color: black;
		color: white;
		${'' /* flex-basis: 100px; */}
		flex-direction: column;
	}
`;

const FighterImage = styled.img`
	 {
		background-size: cover;
		display: flex;
		${'' /* max-width: 100%; */}
		margin-top: 10px;
		border-bottom: 1px solid white;
	}
`;

const FighterDescription = styled.div`
	 {
		position: relative;
		text-align: center;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 4em;
		font-family: 'Teko', sans-serif;
		position: relative;
		top: -2.5vh
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

const ButtonsWrapper = styled.div`
	 {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		position: relative;
		top: -3vh;
		width: 135px;
		
	}
`;

const FighterContainer = ({
	fighter,
	modal,
	fightKey,
	fighterId,
	fighterPhoto,
	justifyContent
}) => {

	console.log('--445', fighterId)
	const { auth, voteHandler } = useContext(FirebaseContext);

	const checkAuthAndVote = e => {
		console.log(e);
		fighter = e.className + fighterId;
		if (auth.currentUser) {
			try {
				voteHandler(
					'fights',
					fightKey,
					auth.currentUser.uid,
					e.className,
					fighterId
				);
			} catch (error) {
				console.log(error);
			}
		} else {
			modal();
		}
	};

	const MAP1 = {
		name: `${fightKey + fighterId}win`,
		areas: [
			{
				name: '1',
				shape: 'circle',
				coords: [30, 30, 30],
				className: 'winFighter'
			}
		]
	};
	const MAP2 = {
		name: `${fightKey + fighterId}fav`,
		areas: [
			{
				name: '1',
				shape: 'circle',
				coords: [30, 30, 30],
				className: 'favFighter'
			}
		]
	};

	return (
		<FighterWrapper className={`fighter-wrapper fighter${fighterId}grid`} justifyContent={justifyContent}>
		<Fighter justifyContent={justifyContent}>
			<FighterImage src={fighterPhoto} />
				<ButtonsWrapper className='button-wrapper'>
					<ImageMapper
						width={60}
						onClick={checkAuthAndVote}
						src="assets/winner.png"
						className={'winFighter'}
						map={MAP1}
					/>
					{/* <img src="assets/winner.png" map="fightermap"></img>
					<map name="fightermap">
						<area shape="circle" coords="30,30,30"  alt="fighter"/>
					</map> */}
					{/* <ImageMapper
						width={60}
						onClick={checkAuthAndVote}
						src="assets/winner.png"
						className={'favFighter'}
						map={MAP2}
					/> */}
				</ButtonsWrapper>
			<FighterDescription>
				{fighter.nick}
			</FighterDescription>
		</Fighter>
		</FighterWrapper>
	);
};

export default FighterContainer;
