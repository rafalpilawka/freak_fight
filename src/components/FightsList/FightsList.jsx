import React, { useContext, useState, useEffect } from 'react'
import Fight from 'components/FightsList/Fight/Fight';

import styled from 'styled-components';
import { data } from 'data/data'
import FirebaseContext from 'firebase/context';
import Modal from 'react-modal';
import { UserContext } from 'context/userContext';
import Authorization from 'components/Navigation/Authorization/Authorization'

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

// Modal.setAppElement('#modal')

const FightsList = styled.div`{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: column;
    width: 75%;
   
}`

const FightsListContainer = ()  => {
    const Firebase = useContext(FirebaseContext)
    const { userStatus } = useContext(UserContext)
    const [fights, setFights] = useState([])
    const [modalIsOpen, setToggleModal] = useState({ modalIsOpen: false })
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


    //MODAL
    const openModal = () => {
        setToggleModal({ modalIsOpen: true });
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setToggleModal({ modalIsOpen: false });
    }


    //MODAL

    const fireModal=()=>{
        console.log('modal check--333', modalIsOpen)
        setToggleModal({modalIsOpen: true})
    }

    console.log('after fetch',fights)

    const fightsArray = fights.map(fight =>
        (<Fight modal={fireModal} id={fight.id} key={fight.id} fight={fight}></Fight>))

    return (
        <FightsList>
            {fights ? fightsArray:
                <div>Loading...</div>}
            <div id='modal'></div>
            <Modal
                isOpen={modalIsOpen.modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 
                // { subtitle => this.subtitle = subtitle}
                    >Please login with Facebook</h2>
                <button onClick={closeModal}>Exit without login</button>
                <div></div>
                <form>
                    <input />
                   <Authorization/>
                </form>
            </Modal>

        </FightsList>
    )
}

export default FightsListContainer


