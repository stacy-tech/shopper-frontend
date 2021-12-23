import { useState } from 'react'
import { submitSignup, submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'


function Auth(props){
    const [signup, setSignup] =  useState(false)
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const toggleSignup = () => setSignup(!signup)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        signup ? props.submitSignup({first_name, last_name, username, password}) : props.submitLogin({username, password})
    }

    return <>
        {signup ? <h1>Sign up!</h1> :<h1>Login</h1>}
        <form onSubmit={handleSubmit}>
            {signup && <label>
                First Name:
                <input type="text" name="first_name" value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
            </label>}
            {signup && <label>
                Last Name:
                <input type="text" name="last_name" value={last_name} onChange={(e) => setLast_name(e.target.value)} />
            </label>}
            <label>
                Username:
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <button onClick={toggleSignup}>or... {signup ? "login!" : "signup!"}</button>
    </>
    
}

export default connect(null, {submitSignup, submitLogin})(Auth)