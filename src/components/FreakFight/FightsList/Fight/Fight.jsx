import React from 'react';
import styled from 'styled-components';
import Fighter from 'Components/FreakFight/FightsList/Fight/Fighter/Fighter';
import { ReactComponent as VS } from 'Components/FreakFight/FightsList/Fight/vslogo.svg'

const FightWrapper = styled.div`
{

	display: grid;
	grid-template-columns: 4fr 1fr 4fr;
	background-color: black;


${'' /* 	
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 400px;
	background-color: black;
	border: 1px solid black;
	margin-top: 25px;
			position: relative;
			padding: 0 100px; */}
}
`;

const VSlogo = styled.img`{

}`


const Fight = ({ fight, modal, id }) => {
	return (
		<FightWrapper>
			<Fighter
				modal={modal}
				fighter={fight.fighter1}
				fighterPhoto={fight.fighter1.fighterImg}
				fightKey={id}
				fighterId={1}
				votes={fight.voteForWin}
				justifyContent={'flex-end'}
		/>
            <VS />
			<Fighter
				modal={modal}
				fighter={fight.fighter2}
				fighterPhoto={fight.fighter2.fighterImg}
				fightKey={id}
				fighterId={2}
				votes={fight.voteForWin}
				justifyContent={'flex-start'}
			/>
		</FightWrapper>
	);
};

export default Fight;
