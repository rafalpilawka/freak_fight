import React, { createContext, useState } from 'react'

export const FighterContext = createContext();

const FighterContextProvider = (props) => {

  const [fighter1, setfighter1] = useState({
    name: '',
    nick: '',
    weight: '',
    height: '',
    last_fight: '',
    fighterImg: ''
  });

  const [fighter2, setfighter2] = useState({
    name: '',
    nick: '',
    weight: '',
    height: '',
    last_fight: '',
    fighterImg: ''
  });

  return (
    <FighterContext.Provider value= { { fighter1, fighter2 , setfighter1, setfighter2 } } >
      {props.children}
    </FighterContext.Provider>
  )
}

export default FighterContextProvider;