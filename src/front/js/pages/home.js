import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();

	const [msg, setMsg] = useState('Loading message from the backend (make sure your python backend is running)...')

	const getTasks = () => {
		const token = localStorage.getItem('jwt-token');
		if(token) {
			fetch(`https://victormagacbt-shiny-disco-v4x5j9p457xfprpv-3001.preview.app.github.dev/api/tasks`, { 
				method: "GET",
				headers: { 
					"Content-Type": "application/json",
					"Authorization": "Bearer " + token
				},
			})
			.then((res) => res.json())
			.then((result) => {
				console.log('Response is here =====>', result);
				setMsg(result.email)
			}).catch((err) => {
				console.log(err);
			})
		} else {
			alert(' You are not logged in!')
		}
	}

	const logOut = () => {
		localStorage.removeItem('jwt-token')
	}

	return (

		<div className="text-center mt-5">
				<div className="alert-info">
				{msg}
				</div>
				<div className="image">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PbfeWHGfP_o5JLOjv4H0okBlazulFmWk-w&usqp=CAU" className="img_home"/>
				</div>
				<div className="home_buttons">
					<button onClick={getTasks}>
						Get Tasks
					</button>
					<button onClick={logOut}>
						Log Out
					</button>
					<button onClick={() => navigate("/signup")}>
						Signup
					</button>
					<button onClick={() => navigate("/login")}>
						Login
					</button>
					<button onClick={() => navigate("/private")}>
						Private Page
					</button>
				</div>
			</div>
	);
};

