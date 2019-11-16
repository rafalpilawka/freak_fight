import React from 'react'
import Firebase from 'Firebase/FreakFight/firebaseUtils';

const FirebaseContext = React.createContext(null)

function useFirebase(){
  const firebase = React.useContext(FirebaseContext)
  return firebase
}
function Provider(props){
  
  const firebase = React.useMemo(()=>{
    if(!!Firebase.length){
      return Firebase
    }else{
     return new Firebase()
    }
  },[Firebase] )
  return <FirebaseContext.Provider value={firebase} {...props}/>
}

export { Provider ,  useFirebase };

// const PureAuthState = ({ children, firebase }) => {
//   //.. rest removed for brevity.
//   const contextValue = React.memo(() => ({ authState, setAuthState }), [
//     authState,
//     setAuthState
//   ]);

