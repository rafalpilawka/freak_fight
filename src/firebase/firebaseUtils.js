import app from 'firebase/app';
import  'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyAR0WVISVNCMgwjM4ksEtO8IrbzQuOI-3E",
    authDomain: "freak-fight2019.firebaseapp.com",
    databaseURL: "https://freak-fight2019.firebaseio.com",
    projectId: "freak-fight2019",
    storageBucket: "freak-fight2019.appspot.com",
    messagingSenderId: "680383500225",
    appId: "1:680383500225:web:6e2c2410e5346e407aa940",
    measurementId: "G-DLHYSZ4LGV"
  };

class Firebase{
  constructor(){
    app.initializeApp(config);
    this.auth = app.auth();
    // this.db = app.database();
    this.facebookProvider = new app.auth.FacebookAuthProvider().setCustomParameters({'display': 'popup' });;
    this.firestore = app.firestore();
   
  
  }
  updateField = (name, id, obj) =>{
    this.firestore.collection(name).doc(id).update(obj)
  }
  getCollectionDoc = (name, id) => 
    this.firestore.collection(name).doc(id).get()
  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);
  doSignOut = () => this.auth.signOut();

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }
  addToFightArray = async (name, id, userId, arrayClass)=>{
    const pointer = this.firestore.collection(name).doc(id)
    const votingArray = await this.firestore.collection(name).doc(id).get().then(res=>res.data())
    let setvotingArray
    let vote=[];

    // const updateArray = (vote) => {
    //   console.log(vote ,  'inside voting finction')
    //   vote.push(userId);
    //   const setvotingArray = Array.from(new Set(vote))

    //   try {
    //     pointer.update({ [selector]: setvotingArray })

    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
      
    switch (arrayClass) {
        case 'winFighter':
         vote = votingArray.votesForWin;
         console.log(arrayClass, 'inside switch 9009090', votingArray.votesForWin, id)
          vote.push(userId);
          setvotingArray = Array.from(new Set(vote))
          try {
            pointer.update({ voteForWin: setvotingArray })

          } catch (error) {
            console.log(error)
          }
          break;
      case 'favoriteFighter':
          vote = votingArray.votesForFav;
        console.log(arrayClass, 'inside switch 9009090', votingArray.votesForFav)
            vote.push(userId);
             setvotingArray = Array.from(new Set(vote))

            try {
              pointer.update({ votesForFav: setvotingArray })

            } catch (error) {
              console.log(error)
            }
          break;
        default:
          break;
      }
  } 
}
export default Firebase
