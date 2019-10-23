import React, { useContext, useState, useEffect } from 'react';
import Fight from 'components/FightsList/Fight/Fight';
import styled from 'styled-components';
import FirebaseContext from 'firebase/context';
import Modal from 'react-modal';
import Authorization from 'components/Navigation/Authorization/Authorization';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		height: '500px',
		zIndex: '999',
		position: 'fixed',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'column',
		color: 'white',
		backgroundColor: 'black',
		fontSize: 'medium'
	}
};

const FightsList = styled.div`
{
	display: flex;
	justify-content: space-between;
	align-content: center;
	flex-direction: column;
	width: 75%;
}
`;

const FightsListContainer = () => {
	const Firebase = useContext(FirebaseContext);
	const [fights, setFights] = useState([]);
	const [modalIsOpen, setToggleModal] = useState({ modalIsOpen: false });

	useEffect(() => {
		Firebase.firestore.collection('fights').onSnapshot(snapshot => {
			const allFights = snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}));
			setFights(allFights);
		});
	}, []);

	const closeModal = () => {
		setToggleModal({ modalIsOpen: false });
	};

	const fireModal = () => {
		setToggleModal({ modalIsOpen: true });
  };

	const fightsArray = fights.map( fight =>
		<Fight modal={ fireModal } id={ fight.id } key={ fight.id } fight={ fight } />
	);

	return (
        <>
		<FightsList>
            {fights ? fightsArray : <div>Loading...</div>}
		</FightsList>
        <Modal
            isOpen={modalIsOpen.modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Authorization information">
            <h3>Please login with Facebook</h3>
            <Authorization />
            <button onClick={closeModal}>Exit without login</button>
            <div />
        </Modal>
        </>
	);
};

export default FightsListContainer;
