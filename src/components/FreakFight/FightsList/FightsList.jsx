import React, { useContext, useState, useEffect } from 'react';
import Fight from 'components/FreakFight/FightsList/Fight/Fight';
import styled from 'styled-components';
import { FirebaseContext } from 'Firebase/FreakFight/index'
import List from 'components/FreakFight/FightsList/List'
import ModalContainer from 'components/FreakFight/FightsList/Modal'


const FightsListContainer = styled.div`
{
	display: grid;
	justify-content: center;
	justify-items: center;
	align-items: center;
	align-content: center;
	flex-direction: column;
	background-color: black;
	& h1 {
		font-family: 'Teko', sans-serif;
		color: white;
		font-size: 5em;
		padding: 0;
		text-decoration: underline;
	}
}
`;

const FightsList = () => {
	const { firestore, auth }  = useContext(FirebaseContext);
	const [fights, setFights] = useState([]);
	const [modalIsOpen, setToggleModal] = useState({ modalIsOpen: false });
	const [userAuth, setUserAuth] =  useState(() => auth.currentUser );
	const [votedMatrix, setVotedMatrix ] = useState(null)
	
	const checkUser = () => {
		console.log(votedMatrix)
	};

	useEffect(() => {
		firestore.collection('fights').onSnapshot(snapshot => {
			const allFights = snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}));
			console.log("TCL: FightsList -> allFights", allFights)
			setFights(allFights);
		});
	}, []);

	useEffect(() => {
		if(userAuth){
			firestore.collection('users').onSnapshot(snapshot => {
				const users = snapshot.docs
					.map(doc => ({
						id: doc.id,
						...doc.data()
					}));
				const user = users.filter(user => user.id === userAuth)[0].fights
				const matrix = fights.map(fight => user.some((el) => el === fight.id))
				setVotedMatrix(matrix)
			}
				)	}
	}, [userAuth, fights])

	useEffect(() => {
		auth.onAuthStateChanged(function (user) {
			if (user) {
					const userId = user.uid
					setUserAuth(userId);
			} else {
				setVotedMatrix(null)
				setUserAuth(null);
			}
		});
	})

	const closeModal = () => {
		setToggleModal({ modalIsOpen: false });
	};

	const fireModal = () => {
		setToggleModal({ modalIsOpen: true });
	};
	return (
        <>
				<FightsListContainer>
				{/* <button onClick={checkUser}>Auth Check</button> */}
						<h1>KTO WYGRA?</h1>
							{fights ? <List fights={fights} votedMatrix={votedMatrix} fireModal={fireModal}/> : <div>Loading...</div>}
				</FightsListContainer>
			<ModalContainer modalIsOpen={modalIsOpen} setToggleModal={setToggleModal} closeModal={closeModal}/>
        </>
	);
};

export default FightsList;
