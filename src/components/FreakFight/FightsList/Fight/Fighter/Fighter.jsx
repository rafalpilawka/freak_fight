import React, { useContext } from 'react';
import styled from 'styled-components';
import FirebaseContext from 'Firebase/FreakFight/context';
import { ReactComponent as WinnerLogo } from 'assets/winner.svg';

const FighterWrapper = styled.div`
	 {
		display: flex;
		flex-direction: column;
		align-items: ${props => props.justifyContent};
		width: 100%;
		height: 100%;
	}
`;

const FighterContainer = styled.div`
	 {
		display: flex;
		align-items: center;
		background-color: black;
		color: white;
		flex-direction: column;
	}
`;

const FighterImageContainer = styled.img`
	 {
		background-size: cover;
		display: flex;
		max-width: 100%;
		margin-top: 10px;
		border-bottom: 1px solid white;
	}
`;

const FighterDescriptionContainer = styled.div`
	 {
		position: relative;
		text-align: center;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 4em;
		font-family: 'Teko', sans-serif;
		position: relative;
		top: -4vh;
	}
`;

const FighterControlContainer = styled.div`
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
		top: -5vh;
		width: 135px;
		
	}
`;

const ButtonContainer =styled.button`{
	border: 4px solid white;
	border-radius: 50%;
	width: 70px;
	height: 70px;
	cursor: pointer;
	background: url('assets/winner.png');
	background-size: cover;
	&:hover {
		color: #fdec6e;
		box-shadow: 0px 0px 20px yellow;
		-moz-transition: all 0.2s ease-in;
		-o-transition: all 0.2s ease-in;
		-webkit-transition: all 0.2s ease-in;
		transition: all 0.1s ease-in;
		opacity: .9;
	}
}`

const Ratio = styled.div`{
    // Trzeba znalzesc odpowiednia czcionke ktora bedzie miala rowne odstepny 
    font-family: 'Teko';
    font-size: 6em;
    background-color: ${props => props.ratio > 50 ? '#00c853' : 'grey' };
    border: 2px solid white;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    display: flex;
	justify-content: center;
	align-items: center;
    &:after{
        content: "%";
        font-size: 0.75em;
    }
}`

const Fighter = ({
	fighter,
	modal,
	fightKey,
	fighterId,
	fighterPhoto,
	justifyContent,
	ratio
}) => {
	const { auth, voteHandler } = useContext(FirebaseContext);
	console.log('ratio-66',ratio)
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

	return (
		<FighterWrapper
			className={`fighter-wrapper fighter${fighterId}grid`}
			justifyContent={justifyContent}>
			<FighterContainer justifyContent={justifyContent}>
				<FighterImageContainer src={fighterPhoto} />
				<ButtonsWrapper className="button-wrapper">
					{/* <ButtonContainer onClick={checkAuthAndVote} /> */}
                    <Ratio ratio={ratio}>
                        {`${ratio}`}
                    </Ratio>
				</ButtonsWrapper>
				<FighterDescriptionContainer>
					{fighter.nick}
					
				</FighterDescriptionContainer>
			</FighterContainer>
		</FighterWrapper>
	);
};

export default Fighter;
