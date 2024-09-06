import react, {useState, useRef} from "react";
import app from '../firebase';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

 const SignUpPage = (props) => {
    let [isError, setError] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');
    let [email , setEmail] = useState('');
    let [password, setPassword] = useState('');

    const auth = getAuth(app);

  const signUpUser = () => {

    createUserWithEmailAndPassword(auth, email , password)
    .then(userCredential => {
        setError(true); 
        setEmail('');
        setPassword('');
        setErrorMessage("Successfully registered")   
        // setTimeout(setErrorMessage(''), 2000) 
    })
    .catch(err => {
        setError(true);
        setErrorMessage(err.message);
        // setTimeout(setErrorMessage(''), 2000)       
    })
  }

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(data => {
        setError(true); 
        setEmail('');
        setPassword('');
        setErrorMessage("Successfully loggedIn") 
        // setTimeout(setErrorMessage(''), 2000)       
           
    })
    .catch(err => {
        setError(true);
        setErrorMessage(err.message);
        // setTimeout(setErrorMessage(''), 2000)       
    })
  }

    return (
        <div className="w-80 p-5 top-[50%] absolute -translate-x-[50%] left-[50%] -translate-y-[50%] bg-green-300">
            <input onChange={(e) => {setEmail(e.target.value)}} value={email} required type="email" className="mx-2 px-1" placeholder="Your Email"/>

            <button onClick={signUpUser} className="px-2 p-1 bg-red-400 text-white rounded-md my-1 ml-auto">signUp</button>

            <input onChange={(e) => {setPassword(e.target.value)}} value={password} required type="password" className="mx-2 px-1" placeholder="Your Password"/>

            <button onClick={signInUser} className="px-3 p-1 bg-red-400 text-white rounded-md ml-auto">SignIn</button>
            {isError ? <h3 className="text-center my-1">{errorMessage}</h3> : null}

        </div>
    )
}

export default SignUpPage;