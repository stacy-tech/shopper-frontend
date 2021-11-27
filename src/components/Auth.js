import { useState } from 'react'

function Auth(props){
    const [signup, setSignup] =  useState(false)

    const toggleSignup = () => setSignup(!signup)

    return <>
        {signup ? <h1>Sign up!</h1> :<h1>Login</h1>}
        <button onClick={toggleSignup}>or... {signup ? "login!" : "signup!"}</button>
    </>
    
}

export default Auth