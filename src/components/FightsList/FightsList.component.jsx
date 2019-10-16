import React, { useContext, useState, useEffect } from 'react'
import Fight from './Fight/Fight.component';
import Fighter from './Fight/Fighter/Fighter.component';
import styled from 'styled-components';
import { data } from '../../data/data'
import FirebaseContext from '../../firebase/context';

const FightsList = styled.div`{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: column;
    width: 75%;
   
}`

const FightsListContainer = ()  => {
    const Firebase = useContext(FirebaseContext)
    const [fights, setFights] = useState([])
    console.log(Firebase)

    useEffect(() => {
        Firebase
            .firestore
            .collection('fights').onSnapshot((snapshot)=> {

                const allFights = snapshot.docs.map(doc=>({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(allFights)
                setFights(allFights)
            })
    },[])

    console.log('after fetch',fights)

    const fightsArray = fights.map(fight =>
        (<Fight key={fight.id} fight={fight}></Fight>))
    return (
        <FightsList>
            {fights ? fightsArray:
                <div>Loading...</div>}
        </FightsList>
    )
}

export default FightsListContainer


