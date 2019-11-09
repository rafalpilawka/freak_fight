import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFirebase } from 'Firebase/FreakFight/index'
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
	const { firestore, auth }  = useFirebase();
	const [fights, setFights] = useState([]);
	const [modalIsOpen, setToggleModal] = useState({ modalIsOpen: false });
	const [userAuth, setUserAuth] =  useState(() => auth.currentUser );
	const [votedMatrix, setVotedMatrix ] = useState(null)

	useEffect(() => {
		firestore.collection('fights').onSnapshot(snapshot => {
			const allFights = snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}));
			setFights(allFights);
		});
	},[]);

	useEffect(() => {
		if(userAuth){
			const setUpMatrix = async()=>{
				//IMPORTANT PART FOR CREATING DB USER 
				await firestore.collection('users').doc(userAuth).onSnapshot(snapshot => {
				console.log("TCL: setUpMatrix -> snapshot before if", snapshot.data())
				if(snapshot.data()){
          console.log("TCL: setUpMatrix -> snapshot in if ", snapshot)
					const user = snapshot.data()
					const matrix = fights.map(fight => user.fights.some((el) => el === fight.id))
					setVotedMatrix(matrix)
				}
				})
			}
		setUpMatrix()
					}
	}, [userAuth, fights])

	useEffect(() => {
		auth.onAuthStateChanged(function (user) {
			if (user) {
				const userId = user.uid
				setUserAuth(userId);
				if(modalIsOpen.modalIsOpen){
					closeModal()
				}
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
						<h1>KTO WYGRA?</h1>
							{fights ? <List fights={fights} votedMatrix={votedMatrix} fireModal={fireModal}/> : <div>Loading...</div>}
				</FightsListContainer>
			<ModalContainer modalIsOpen={modalIsOpen} setToggleModal={setToggleModal} closeModal={closeModal}/>
        </>
	);
};

export default FightsList;
