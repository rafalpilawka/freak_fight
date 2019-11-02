import React from 'react';
import styled from 'styled-components';
import Fighter from 'Components/FreakFight/FightsList/Fight/Fighter/Fighter';
import { ReactComponent as VS } from 'Components/FreakFight/FightsList/Fight/vslogo.svg'

const FightWrapper = styled.div`
{

	display: grid;
	grid-template-columns: 2fr 2fr 1fr 1fr 2fr 2fr;
	background-color: black;
	justify-items: center;
	align-items: center;


& .fighter1grid {
	grid-column: 1/4;
	grid-row: 1;
}

& .fighter2grid {
	grid-column: 4/7;
	grid-row: 1;
}
}
`;

const VSlogo = styled.div`{
	display: absolute;
	min-width: 100px;
	grid-column: 3/5;
	grid-row: 1;
	z-index: 7;
	position: relative;
	@media only screen and (min-width: 700px) {
	display: block;
}
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
		<VSlogo><VS styles={{width: '100%'}} /></VSlogo>
            
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
