import React from "react"
import { emailValidator, passwordValidator } from '../components/regexValidator';
import {FaUsers,FaKey,FaRegEye,FaUserPlus} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";

const Login = (props) => {
    const navigate  = useNavigate();

    const [hide,setHide] = React.useState("password");
    const [successMessage, setsuccessMessage] = React.useState('');
    const [input, setInput] = React.useState({ email: '', password: '' });
    const [errorMessage, seterrorMessage] = React.useState('');

    

    const Change = () => {
            if (hide === "password") {
                setHide("text");
            } else {
                setHide("password");
            }
    }

    const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

    React.useEffect(()=>{
		if(localStorage.getItem('auth')) navigate('/')
	},[])

    const formSubmitter = e => {
		e.preventDefault();
		setsuccessMessage('');
		if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');

		if (!passwordValidator(input.password))
			return seterrorMessage(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
		// setsuccessMessage('Successfully Validated');
		if(input.email !== 'admin@a.com' || input.password !== 'Password@1') return seterrorMessage('Invalid email or password');

		navigate('/')
		localStorage.setItem('auth', true)

	};

    return (
        <div className="overlay">
            <form style={{marginTop: "200px"}} onSubmit={formSubmitter}>
                <div className="con">
                    <header className="head-form">
                        <h2>Login</h2>
                        <p>login here using your username and password</p>
                    </header>
                    <br />
                    {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
                    <div className="field-set">
                        <span className="input item"><FaUsers /></span>
                        <input 
                            className="form-input" 
                            id={"txt-input"} 
                            type={"text"}
                            placeholder={"@UserName"} 
                            required={"true"}
                            onChange={handleChange}>
                        </input>
                        <br />
                        <span className="input item"><FaKey /></span>
                        <input
                            className="form-input"
                            type={hide}
                            placeholder={"Password"}
                            id={"pwd"}
                            name={"password"}
                            required={"true"}
                            onChange={handleChange}
                        >
                            
                        </input>
                        <span>
                            <FaRegEye 
                                type="button" 
                                onClick={Change}
                                aria-hidden={"true"}>
                                id={"eye"}
                            </FaRegEye>
                        </span>
                        <br />
                        <button className="log-in"> Log In </button>
                    </div>
                    <div className="other">
                        <button className="btn submits frgt-pass" >Forgot Password</button>
                        
                        <button className="btn submits sign-up">Sign Up
                            <FaUserPlus aria-hidden={"true"}/></button>
                        
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;