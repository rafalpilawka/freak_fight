import React, { createContext, useState } from 'react'

export const InfoContext = createContext();

const InfoContextProvider = (props) => {


  const store='information'

  return (
    <InfoContext.Provider value={store} >
      {props.children}
    </InfoContext.Provider>
  )
}

export default InfoContextProvider;