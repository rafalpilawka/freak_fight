import React, { useContext, useState, useEffect, createContext } from 'react';
import FighterContextProvider from 'Components/Admin/Context/FighterContext'
import {FighterContext} from 'Components/Admin/Context/FighterContext'
import FighterForm from 'Components/Admin/FighterForm';
import FightForm from 'Components/Admin/FightForm'
import FightContextProvider from 'Components/Admin/Context/FightContext';




const Admin = () => {


	return (
		<FightContextProvider>
		<FighterContextProvider>
			<FightForm>
				<FighterForm id='fighter1' />
				<FighterForm id='fighter2' />
			</FightForm>
		</FighterContextProvider>
		</FightContextProvider>
	);
};

export default Admin;
