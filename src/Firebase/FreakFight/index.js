// import FirebaseContext from 'Firebase/FreakFight/context';
import React from 'react'
import Firebase from 'Firebase/FreakFight/firebaseUtils';

const FirebaseContext = React.createContext(null)

function useFirebase(){
  const firebase = React.useContext(FirebaseContext)
  return firebase
}
function Provider(props){
  const firebase = React.useMemo(()=> new Firebase(),[])
  return <FirebaseContext.Provider value={firebase} {...props}/>
}

export { Provider ,  useFirebase };
