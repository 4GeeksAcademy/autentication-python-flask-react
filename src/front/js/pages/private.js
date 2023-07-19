import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/private.css";


export const Private = () => {

	const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwt-token');
        if(!token) {
            navigate('/login')
        }
    },[])

	return (
		<div className="treasure">
            <div className="tittle text-center my-4">
				<h1>Private Page</h1>
			</div>
           <img src ="https://media.istockphoto.com/id/1160778039/pt/foto/treasure-chest-open-ancient-trunk-with-glowing-magic-lights-in-the-dark.jpg?s=612x612&w=0&k=20&c=Q590m2fi6qYtSwzQRhJ2vySOwCllfuGTuK1iZ3WE2ks=" />
		</div>
	);
};
