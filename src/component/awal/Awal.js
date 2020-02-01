import React, { Component } from 'react';
import logo from './laptop.png';
import lambang from '../../assets/1578473690782.png';
// import img from '../../assets/complit.jpg';
import { Link } from 'react-router-dom';
import './awal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from '../Nav/Navbar';

export class Awal extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="all">
					<div className="bg-blur" />
					<div className="ul">
						<div className="col">
							<div className="logo ">
								<img
									src={logo}
									alt="laptop"
									className="img"
									style={{
										width: '42vw',
										position: 'relative',
										top: '20vh',
										left: '50vw'
									}}
								/>
							</div>
							<br />
						</div>

						<div className="col text-title" style={{ height: '35vw' }}>
							<img
								src={lambang}
								alt=""
								style={{ width: '15vw', textAlign: 'center', marginRight: '40vw', marginTop: '15vh' }}
							/>
							<h3 style={{ color: 'white', textAlign: 'center', marginRight: '40vw' }}>
								<b>
									Ai Chat adalah sebuah aplikasi<br /> Real Time Chat yang<br /> Sederhana, Aman dan
									Mudah Digunakan
								</b>
							</h3>
							
						</div>

						<div style={{ display: 'flex' }}>
							<Link
								className="btn-awal"
								style={{ marginTop: '5vh', marginLeft: '5vw', width: '15vw', padding: '12px', textDecoration: 'none' }}
								to="/register"
							>
								Register
							</Link>
							<Link
								className="btn-awal"
								style={{ marginTop: '5vh', marginLeft: '60vw', width: '15vw', padding: '12px', textDecoration: "none" }}
								to="/chat"
							>
								Mulai Chat
							</Link>
						</div>
					</div>
					{/* <ul className="ul">
						<div className="col" style={{ height: '35vw' }}>
							<img src={lambang} style={{ width: '15vw' }} />
							<h3 style={{ color: 'white', position: 'relative', left: '55px' }}>
								<b>
									Ai Chat adalah sebuah aplikasi Real Time Chat <br /> yang Sederhana, Aman dan Nyaman
								</b>
							</h3>

							<div className="padding-30" />
						</div>

						<div className="col">
							<div className="logo ">
								<img
									src={logo}
									alt="laptop"
									className="img"
									style={{
										width: '40vw',
										position: 'relative',
										top: '15vh',
										left: '5vw'
									}}
								/>
							</div>
							<br />
						</div>

						<div>
							<Link className="btn" to="/register">
								Register
							</Link>
							<Link className="btn" to="/chat">
								Mulai Chat
							</Link>
						</div>
					</ul> */}
				</div>
			</React.Fragment>
		);
	}
}

export default Awal;
