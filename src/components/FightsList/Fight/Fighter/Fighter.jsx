import React , {useState, useContext, useEffect } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart, faStar
} from '@fortawesome/free-solid-svg-icons'
import PopUp from 'components/LogInPopUp/LoginPopUp';
import FirebaseContext from 'firebase/context'
import Modal from 'react-modal';
// import {ReactComponent as Star} from 'assets/star.svg'
// import {ReactComponent as Heart} from 'assets/heart.svg'


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
        flex-direction: column;
    }`
const FighterImage = styled.img`{
        background-image: (${props => props.imgUrl});
        display: flex;
        width: 300px;
        height:500px;
        background-color: grey;
        object-fit: cover;
        margin-top: 10px;
    }`

const FighterDescription = styled.div`{

        position: relative;
        ${'' /* top: -30px; */}
        text-align: center;
        ${'' /* flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: center; */}
        height:100%;
        top: 200px;  
    }`

const FighterControl = styled.div`{
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 999;
    }`
const StyledButton = styled.button`{
            display: flex;
            justify - content: space - between;
            align - items: center;
            z - index: 999;
    }`

const IconContainer = styled.div`{
        position: relative;
        color: white;
         display: flex;
        justify-content: space-between;
        align-items: center;
        ${'' /* transform: scale(1); */}
        width: 80px;
        height: 80px;
        top: -40px;
        magin: 10px;


    }`

const Button =styled.div`{
    position: relative;
    top: -1vh;
    background-color: grey;
    color: white;
    border: 1px solid black;

}`

const customStyles = {
    
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const FighterContainer = ({fighter, modal, fightKey, fighterId}) => {

    
    const {firestore, auth, getCollectionDoc, updateField} = useContext(FirebaseContext)
    const [svg, setSvg] = useState()

    console.log(fighter)
   

    var fontawsomeStyle =  { transform: 'scale(2.5)', cursor: 'pointer'}

    const checkAuthAndVote = (e) =>{

    fighter = e.target.className + fighterId
    if (auth.currentUser){
        try {
            updateField('fights', fightKey, { [fighter]: 1 })
        } catch (error) {
            console.log(error)
        }    
    }else{
        modal()
    }
      
    }

    return (
        <>     
            <Fighter >
            <FighterDescription>{fighter}</FighterDescription>
                <FighterImage></FighterImage>
                <FighterControl>
                    <Button><button className='favoriteFighter' onClick={checkAuthAndVote}>Fav</button></Button>
                    <Button><button className='winFighter' onClick={checkAuthAndVote}>Win</button></Button>
                    {/* <IconContainer>
                        <Star onClick={checkAuthAndVote}></Star>
                    </IconContainer> */}
                    {/* <IconContainer>
                        <Heart onClick={checkAuthAndVote}></Heart>
                    </IconContainer> */}
                
                    {/* <FontAwesomeIcon style={fontawsomeStyle} icon={faHeart} onClick={checkAuthAndVote.bind(this)} ></FontAwesomeIcon> */}
                        {/* <div style={{ margin: '20px' }} onClick={checkAuthAndVote.bind(this)} className='win'><FontAwesomeIcon style={fontawsomeStyle}  icon={faStar} /></div> */}
                </FighterControl>
            </Fighter> 
            
        </>          
    )
}

export default FighterContainer
