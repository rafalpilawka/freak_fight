import React from 'react'
import Modal from 'react-modal';
import Authorization from 'components/FreakFight/Footer/Navigation/Authorization/Authorization';
import { ReactComponent as Logo } from 'components/FreakFight/Footer/Navigation/freakfight_logo22.svg';
import styled from 'styled-components'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '1000px',
    zIndex: '997',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white',
    backgroundColor: 'black',
    fontSize: 'medium'
  }
};
const ExitBtn = styled.button`
    width: 135px;
    height:35px;  
    border-radius: 4px;
    background: darkred;
    color:white;
    border:0px transparent;  
    text-align: center;
    margin:5px;
    display: inline-block;

    &:hover{
        background: darkred;
        opacity: 0.6;
    }

		@media only screen and (max-width : 600px) {
        width: 250px;
				height: 45px;
				font-size: 15px;
    }
`;



const ModalContainer = ({ modalIsOpen, closeModal}) => {


  return (
    <Modal
      isOpen={modalIsOpen.modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Authorization information">
      <Logo style={{ width: '50%', height: '25%' }}></Logo>
      <h4>Zaloguj się aby głosować <br /></h4>
      <Authorization />
      <ExitBtn onClick={closeModal}>Zamknij okno</ExitBtn>
    </Modal>
  )
}

export default ModalContainer
