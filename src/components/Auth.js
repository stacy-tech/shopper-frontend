import { useState } from 'react'

function Auth(props){
    const [signup, setSignup] =  useState(false)
    
    const toggleSignup = () => setSignup(!signup)

    return <>
        {signup ? <h1>Sign up!</h1> :<h1>Login</h1>}
        <form>
            <label>
                First Name:
                <input type="text" name="first_name" />
            </label>
            <label>
                Last Name:
                <input type="text" name="last_name" />
            </label>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <button onClick={toggleSignup}>or... {signup ? "login!" : "signup!"}</button>
    </>
    
}

export default Auth