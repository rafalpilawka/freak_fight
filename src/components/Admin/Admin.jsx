import React, { useState, useEffect } from 'react';
import FightFormFormik from 'components/Admin/FightFormFormik'
import SignIn from 'components/Admin/SignIn'
import { useFirebase } from 'Firebase/FreakFight/index'

const Admin = () => {
	const { auth } = useFirebase()
	const [adminStatus, setAdminStatus] = useState({admin: false})

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
