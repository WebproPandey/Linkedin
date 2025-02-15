import {auth , provider} from '../firebase';

export  function signIn() {
   return(dispatch) =>{
    auth.signInWithPopup(provider).then((payload) => {
        console.log(payload);
      }).catch((error) => {
        console.log(error);
      });

    }
   }