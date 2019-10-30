import React, { createContext, useState } from 'react'

export const FightContext = createContext();

const FightContextProvider = (props) => {

  const [fight, setFight] = useState({
    favFighter1: [],
    favFighter2: [],
    fighter1: {},
    fighter2: {},
    votesForFav: [],
    votesForWin: [],
    winFighter1: [],
    winFighter2: []
  });

  return (
    <FightContext.Provider value={{ fight, setFight }} >
      {props.children}
    </FightContext.Provider>
  )
}

export default FightContextProvider;