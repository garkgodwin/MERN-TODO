import React from 'react';

//?STYLES
import './Navbar.css';

//?IMAGES
import { ReactComponent as Logo } from '../../images/logo.svg';

const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="n-brand">
				<Logo className="brand-logo" />
				<h1 className="brand-text">GG Todo</h1>
			</div>
		</div>
	);
};

export default Navbar;
