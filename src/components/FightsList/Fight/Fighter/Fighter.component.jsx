import React from 'react';
import styled from 'styled-components'



const Fighter = styled.div`{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgrey;
    color: white;
    flex-basis: 300px;
    width: 40%;
    heigth:100%;
    flex-grow: 4;

    
}`

const FighterImage = styled.img`{
    background-image: (${props=>props.imgUrl});
    display: flex;
    width: 300px;
    object-fit: cover;


}`

const FighterDescription = styled.div`{
    text-align: center;
    ${'' /* flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center; */}
    height:100%;
   

}`

const FighterContainer = ({fighter}) => {
    // console.log(props.img)
    console.log(fighter)
    return (
        <Fighter>

         <FighterDescription>{fighter}</FighterDescription>
        <FighterImage/>

        </Fighter>
       
                    
    )
}

export default FighterContainer
