import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate();

	const onSubmit = () => {
		if(email === '') {
			alert(' Email is Empty!')
		} else if(password === ''){
			alert('Password is empty!')
		} else {
			fetch(`https://victormagacbt-shiny-disco-v4x5j9p457xfprpv-3001.preview.app.github.dev/api/login`, { 
				method: "POST",
				headers: { 
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }) 
			})
			.then((res) => res.json())
			.then((result) => {
				console.log('Token is Here =====>', result);
				localStorage.setItem("jwt-token", result.token);
				alert('You are logged in!')
				navigate('/')
			})
			.catch((err) => {
				console.log(err);
			})
		}
	}

	return (
		<div className="container">
			<div className="tittle text-center my-4">
				<h1>Login</h1>
			</div>
			<div class="mb-3">
				<label for="formGroupExampleInput" class="form-label">Email</label>
				<input 
					type="text" 
					class="form-control" 
					id="email_input" 
					placeholder="Insert your Email here"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div class="mb-3">
				<label for="formGroupExampleInput2" class="form-label">Password</label>
				<input 
					type="password" 
					class="form-control" 
					id="password_input" 
					placeholder="Insert your password here"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div class="col-12">
				<button type="submit" class="btn btn-primary" onClick={onSubmit}>Login</button>
			</div>
		</div>
	);
};
