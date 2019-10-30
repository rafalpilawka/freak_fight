import React, { useContext, useState, useEffect } from 'react';
import FightFormFormik from 'Components/Admin/FightFormFormik'
import SignIn from 'Components/Admin/SignIn'
import Firebase, { FirebaseContext } from 'Firebase/FreakFight/index'

const Admin = () => {
	const { auth } = useContext(FirebaseContext)
	const [adminStatus, setAdminStatus] = useState({admin: true})
	console.log(adminStatus.admin)

	useEffect(() => {
		const authVar = auth.onAuthStateChanged(function (user) {
			if (user) {
				setAdminStatus({admin: true});
			} else {
				setAdminStatus(
					{admin: false}
				);
			}
		});
	},[auth]);

	return (
		<>
		{!adminStatus.admin ? <SignIn setAdmin={setAdminStatus} /> : <FightFormFormik />}
		</>
	);
};

export default Admin;
