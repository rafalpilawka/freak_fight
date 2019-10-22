import app from 'firebase/app';
import 'firebase/firestore'
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

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.facebookProvider = new app.auth.FacebookAuthProvider().setCustomParameters({ 'display': 'popup' });;
    this.firestore = app.firestore();
  }
  updateField = (name, id, obj) => {
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

  voteHandler = async (name, id, userId, arrayClass, fighterId) => {
    const pointer = await this.firestore.collection(name).doc(id)
    const votingArray = await this.firestore.collection(name).doc(id).get().then(res => res.data())
    let setvotingArray
    let selector = ''
    let voteArray = [];
    let fighterVotesArray = []

    const voteLogic = (array, field, selector, fighterVotesArray) => {
      console.log('zzz666', field)
      let present = array.filter(vote => vote === userId)
      console.log('present', present)
      if (present.length === 0) {
        array.push(userId);
        fighterVotesArray.push(userId);
        setvotingArray = Array.from(new Set(voteArray))
        try {
          pointer.update({ [`${selector}`]: setvotingArray });
          pointer.update({ [`${field}`]: fighterVotesArray });

        } catch (error) {
          console.log(error)
        }
      } else {
        alert('Oddałeś głos, nie moesz głosować w tej walce')
      }
      return null
    }

    switch (arrayClass) {
      case 'winFighter':
        selector = 'votesForWin'
        voteArray = votingArray.votesForWin;
        fighterVotesArray = votingArray[`${'winFighter' + fighterId}`];
        voteLogic(voteArray, 'winFighter' + fighterId, selector, fighterVotesArray)
        break;
      case 'favoriteFighter':
        selector = 'votesForFav'
        voteArray = votingArray.votesForFav;
        fighterVotesArray = votingArray[`${'favFighter' + fighterId}`];
        voteLogic(voteArray, 'favFighter' + fighterId, selector, fighterVotesArray)
        break;
      default:
        break;
    }
  }
}
export default Firebase
