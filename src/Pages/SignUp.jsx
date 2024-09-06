import react, {useState, useRef} from "react";
import app from '../firebase';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

 const SignUpPage = (props) => {
    let [isError, setError] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');
    let [email , setEmail] = useState('');
    let [password, setPassword] = useState('');

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    async function signUpUser() {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          setError(true);
          setEmail('');
          setPassword('');
          setErrorMessage("Successfully registered");
          setTimeout(() => setErrorMessage(''), 4000); 
        } catch (err) {
          setError(true);
          setErrorMessage(err.message);
          setTimeout(() => setErrorMessage(''), 4000);
        }
      }
        
    const signInUser = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            setError(true); 
            setEmail('');
            setPassword('');
            setErrorMessage("Successfully loggedIn") 
            setTimeout(() => setErrorMessage(''), 4000) 
        } catch (err) {
            setError(true);
            setErrorMessage(err.message);
            setTimeout(() => setErrorMessage(''), 4000)  
        }
                
    }

    const signInUserWithG = async ()=> {
        try {
            await signInWithPopup(auth, provider);
            console.log("loggedIn")

        } catch (err) {
            console.log(err.message);
        }
        
    }

    return (
        <div className="w-80 p-5 top-[50%] absolute -translate-x-[50%] left-[50%] -translate-y-[50%] bg-green-300">
            <input onChange={(e) => {setEmail(e.target.value)}} value={email} required type="email" className=" p-1 w-full my-1" placeholder="Your Email"/>

            <input onChange={(e) => {setPassword(e.target.value)}} value={password} required type="password" className=" p-1 w-full my-1" placeholder="Your Password"/>

            <button onClick={signUpUser} className="py-1 w-full bg-red-400 text-white rounded-md my-1 ml-auto">signUp</button>

            <button onClick={signInUser} className="py-1 my-1 bg-red-400 text-white w-full rounded-md ml-auto">SignIn</button>

            <button onClick={signInUserWithG} className="py-1 my-1 bg-red-400 text-white w-full rounded-md ml-auto">SignIn with google</button>

            {isError ? <h3 className="text-center my-1 transition-all">{errorMessage}</h3> : null}

        </div>
    )
}

export default SignUpPage;