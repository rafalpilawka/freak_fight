import React from 'react'
import styled from 'styled-components'
import Fighter from './Fighter/Fighter.component'


const Fight = styled.div`
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
    }
`

const FightContainer = ({fight}) => {
   console.log(fight.fighter1)
    return (
        <Fight >
            <Fighter fight={fight.fighter1}/>
                <VS>VS</VS>
            <Fighter fighter={fight.fighter2}/>
        </Fight>
    )
}

export default FightContainer
