import React from 'react'
import Fight from 'components/FreakFight/FightsList/Fight/Fight';

const List = ({fights, votedMatrix, fireModal}) => {
  console.log("TCL: List -> votedMatrix", votedMatrix)
  return fights.map((fight, i) =>
    <Fight modal={fireModal} id={fight.id} key={fight.id} fight={fight} voted={!votedMatrix ? false : votedMatrix[i]} />
  )
}

export default List
