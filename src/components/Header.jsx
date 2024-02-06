import React from 'react';
import logo from '../assets/logo/Booki.png';

function Header() {
	return (
		<header>
			<div className="logo">
				<img src={logo} alt="Logo Booki" width="191" height="90" />
			</div>

			<nav>
				<ul>
					<li>
						<a href="#lodgings">Hébergements</a>
					</li>
					<li>
						<a href="#activities">Activités</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
