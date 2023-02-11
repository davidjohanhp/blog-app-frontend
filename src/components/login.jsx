import React, {useState, useEffect} from "react";
import Users from "../Users";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    async function handleSubmit(e) {        
        e.preventDefault();
        console.log(email);
        console.log(password);

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8'
                
            },
            body: JSON.stringify({ 
                email: email,
                password: password
            })
        };
        console.log(requestOptions.body);
        const response = await fetch('/api/user/login', requestOptions);
        let actualData = await response.json();
        console.log(actualData) 

        if (response.status === 200) {
            console.log(actualData.existingUser.name);
            localStorage.setItem('userEmail', actualData.existingUser.email);         
            localStorage.setItem('userId', actualData.existingUser._id);         
            localStorage.setItem('userName', actualData.existingUser.name);  
            console.log(localStorage.getItem('userEmail'));  
            console.log(localStorage.getItem('userId'));  
            console.log(localStorage.getItem('userName'));
            navigate('/');
        }
        else {
            // console.log("failed");
            console.log(actualData.message);
        }
    }

    return (
        <section id="login" className="">
        <div className="container">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="text" required value={email} onChange={(event) => setEmail(event.target.value)}></input>
                    <label>Password</label>
                    <input type="text" required value={password} onChange={(event) => setPassword(event.target.value)}></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
        </section>
    );
    
}

export default Login;