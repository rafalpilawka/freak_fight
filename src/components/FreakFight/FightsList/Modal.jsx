import React from 'react'
import Modal from 'react-modal';
import Authorization from 'components/FreakFight/Footer/Navigation/Authorization/Authorization';
import { ReactComponent as Logo } from 'components/FreakFight/Footer/Navigation/freakfight_logo22.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '500px',
    zIndex: '997',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    color: 'white',
    backgroundColor: 'black',
    fontSize: 'medium'
  }
};


const ModalContainer = ({ modalIsOpen, closeModal}) => {


  return (
    <Modal
      isOpen={modalIsOpen.modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Authorization information">
      <Logo style={{ width: '50%', height: '25%' }}></Logo>
      <h3>Please login with Facebook</h3>
      <Authorization />
      <button onClick={closeModal}>Exit without login</button>
    </Modal>
  )
}

export default ModalContainer
