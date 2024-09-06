import React, {useState} from "react";
import SignUP from "./Pages/SignUp";

function App() {

  let [logedIn, setLogedIn] = useState(false);

 return (
    <>
      <h1 className='text-center font-bold text-2xl my-20 text-white'>Firebase Practice</h1>
      { logedIn ? <SignUP /> : <button className="mx-auto absolute bg-green-400 text-white p-2" onClick={() => {
        setLogedIn(true);
      }}>Create User</button>}
    </>
  );
}

export default App
