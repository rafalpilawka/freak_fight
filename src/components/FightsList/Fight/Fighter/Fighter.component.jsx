import React , {useState, useContext, useEffect } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart, faStar
} from '@fortawesome/free-solid-svg-icons'
import PopUp from '../../../LogInPopUp/LoginPopUp';
import FirebaseContext from '../../../../firebase/context'
import Modal from 'react-modal';

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

const FighterControl=styled.div`{
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

const FighterContainer = ({fighter, modal}) => {

    const {firestore, auth} = useContext(FirebaseContext)

    const [toggleModal, setToggleModal ] = useState({toggleModal: false})

    console.log(fighter)
    const favoriteHandler = ()=>setToggleModal({toggleModal: !toggleModal})
    const winHandler = ()=>{console.log('winner chosen')}




    var fontawsomeStyle =  { transform: 'scale(2.5)', cursor: 'pointer', margin:'20px' }


    const openModal=()=> {
       setToggleModal({ modalIsOpen: true });
    }

    const afterOpenModal=() =>{
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    const closeModal=()=> {
        setToggleModal({ modalIsOpen: false });
    }

    const checkAuthAndVote = (e) =>{
        console.log(e.target.id)
        //     if (auth.currentUser){
        // console.log(e.target.id)
        //     }else{
        //         console.log('weneed modal')
        //     }
}

    return (
        <>
        

        <Fighter >
         <FighterDescription>{fighter}</FighterDescription>
            <FighterImage/>
            <FighterControl>
                <FontAwesomeIcon style={fontawsomeStyle} onClick={checkAuthAndVote.bind(this)} icon={faHeart} id='favorite'></FontAwesomeIcon>
                <FontAwesomeIcon style={fontawsomeStyle} onClick={checkAuthAndVote.bind(this)} icon={faStar} id='win'/>
            </FighterControl>
        </Fighter> 
       
          </>          
    )
}

export default FighterContainer
