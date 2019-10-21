import React from 'react'
import styled from 'styled-components'
import Fighter from 'components/FightsList/Fight/Fighter/Fighter'


const FightWrapper = styled.div`
    {
        display: flex;
        justify-content: space-between;
        align-items: center;  
        min-height: 400px; 
        background-color: lightgrey;    
        border: 1px solid black; 
        margin-top: 25px
    }
`
const VS = styled.div`
    {
        color: red; 
        padding-left: 40px;
        padding-right: 40px;
        z-index: 999;
    }
`

const Fight = ({fight, modal, id}) => {
    return (
        <FightWrapper >
            <Fighter modal={modal} fighter={fight.fighter1} fightKey={id} fighterId={1} votes={fight.voteForWin}/>
                <VS>VS</VS>
            <Fighter modal={modal} fighter={fight.fighter2} fightKey={id} fighterId={2} votes={fight.voteForWin}/>
        </FightWrapper>
    )
}

export default Fight
