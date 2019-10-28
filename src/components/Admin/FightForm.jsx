import React, {useContext} from 'react';
import { FightContext } from 'Components/Admin/Context/FightContext';
import { FighterContext } from 'Components/Admin/Context/FighterContext'

const FightForm = () => {
  const {fight}= useContext(FightContext)
  const {fighter1, fighter2, setfighter1, setfighter2} = useContext(FighterContext)
  return (
    <div>
      
    </div>
  )
}

export default FightForm
