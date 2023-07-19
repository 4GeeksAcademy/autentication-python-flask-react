import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	
	return (
		<nav className="navbar">
			<div className="logo">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfL0fbNW3lyNbHiC6oTnThtjGeJvFCNeeAg&usqp=CAU" className="img_navbar"/>             
                </Link>
			</div>			
		</nav>
	);
};
