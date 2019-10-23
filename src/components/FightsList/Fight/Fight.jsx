import React from 'react';
import styled from 'styled-components';
import Fighter from 'components/FightsList/Fight/Fighter/Fighter';
import { ReactComponent as VS } from 'components/FightsList/Fight/vslogo.svg'

const FightWrapper = styled.div`
{
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 400px;
	background-color: lightgrey;
	border: 1px solid black;
	margin-top: 25px;
			position: relative;
			padding: 0 100px;
}
`;


const Fight = ({ fight, modal, id }) => {
	return (
		<FightWrapper>
			<Fighter
				modal={modal}
				fighter={fight.fighter1}
				fighterPhoto={fight.fighter1Photo}
				fightKey={id}
				fighterId={1}
				votes={fight.voteForWin}
			/>
            <VS />
			<Fighter
				modal={modal}
				fighter={fight.fighter2}
				fighterPhoto={fight.fighter2Photo}
				fightKey={id}
				fighterId={2}
				votes={fight.voteForWin}
			/>
		</FightWrapper>
	);
};

export default Fight;
