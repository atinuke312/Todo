import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'


export default function LoginComponent(){

    //username in <input> is directly ties to state[0]
    const [username, setUsername] = useState('in28minutes')

    const [password, setPassword] = useState('')

    const[showSuccessMessage, setShowSuccessMessage] = useState(false)
    const[showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUsernameChange(event){
        //console.log(event.target.value)
        setUsername(event.target.value);
    }

    function handlePassWordChange(event){
        //console.log(event.target.value)
        setPassword(event.target.value);
    }

    function handleSubmit(){
        if(authContext.login(username, password)){
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate('/welcome') //passing username to Route then Welcome Component with useParams
            } else { 
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }



    return (
        <div className="Login">
            <h1>Login</h1>
            {showSuccessMessage && <div className="successMessage">Sucess!</div>}
            {showErrorMessage && <div className="errorMessage">Failed! Please check your credentials</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePassWordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}


