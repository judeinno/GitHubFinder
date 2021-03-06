import React from 'react';
import PropTypes from 'prop-types';

const NavBar = props => {
	return (
		<nav className="navbar bg-success">
			<h1>
				<i className={props.icon} /> {props.title}
			</h1>
		</nav>
	);
};
NavBar.defaultProps = {
	title: 'GitHub Finder',
	icon: 'fab fa-github',
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default NavBar;
