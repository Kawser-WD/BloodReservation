import React, { useContext } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import './Login.css'
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
       }
    const handleGoogleSignIN = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const {displayName,email} = result.user;
                const signedInUser = {name:displayName,email}
                setLoggedInUser(signedInUser)
                history.replace(from);
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
    <div className="global-container">
                <div className="card login-form">
                <div className="card-body">
                    <h1 className="card-title text-center">LOGIN</h1>
                   <div className="card-text">
                   <form className="was-validated">
                     <div class="form-group">
                         <label for="exampleInputEmail1">Email</label>
                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                     </div>
                     <div class="form-group">
                         <label for="exampleInputPassword1">Password</label>
                         <input type="password" class="form-control" id="exampleInputPassword1" required/>
                     </div>
                     {/* <div className="d-flex justify-content-center">
                     <button type="submit" class="btn btn-primary">LOGIN</button>
                     </div> */}
                     <div className="d-flex justify-content-center">
                     <button type="submit" onClick={handleGoogleSignIN} class="btn btn-primary">LOGIN With Google</button>
                     </div>
                 </form>
                   </div>
                </div>
                </div>
        </div>
        
    );
};

export default Login;