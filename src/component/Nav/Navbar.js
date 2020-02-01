import React, { Component } from 'react';
// import img from './IMG_20191210_140805.png';
import 'materialize-css/dist/css/materialize.min.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper" style={{background:'#38d39f'}} >
						<p>Ai Chat</p>
						{/* <img
							src={img}
							alt="logo"
							className="nav-brand"
							style={{ width: '110px', position: 'relative', left: '10px', bottom: '5px' }}
						/> */}
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
