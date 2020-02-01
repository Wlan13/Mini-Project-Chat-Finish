import React, { Component } from 'react';
import './login.css';
import wave from './waves_corner.png';
import img from './undraw_progressive_app_m9ms .svg';
import avatar from './undraw_male_avatar_323b .svg';

import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Loader from '../loader/Loader';

export class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			access_token: ''
		};
	}

	functionMyFunction = () => {
		var x = document.getElementById('myInput');
		if (x.type === 'password') {
			x.type = 'text';
		} else {
			x.type = 'password';
		}
	};

	onHandleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	logIn = (e) => {
		e.preventDefault();

		this.setState({
			loading: true
		});

		console.log(this.state.username);
		console.log(this.state.password);

		const dataLogin = {
			username: this.state.username,
			password: this.state.password
		};
		// this.setState({ isLoading: true });

		axios
			.post('https://calm-mesa-84057.herokuapp.com/login', dataLogin)
			.then((res) => {
				console.log(res);
				localStorage.setItem('data', JSON.stringify(res.data.user));
				localStorage.setItem('token', res.data.access_token);
				this.setState({
					loading: false
				});
			})
			.catch((err) => {
				Swal.fire({
					err,
					icon: 'error',
					title: 'Oops...',
					text: 'Username Atau Password Anda Salah!'
				});
				console.log(err);
				this.setState({
					loading: false
				});
			});
	};

	render() {
		const loading = this.state.loading;

		if (localStorage.getItem('token')) {
			return <Redirect to="/chat" />;
		} else if (loading) {
			return <Loader />;
		}
		return (
			<React.Fragment>
				<img src={wave} alt="wave" className="wave" />
				<div className="container1">
					<div className="img">
						<img src={img} alt="img" className="img" />
					</div>
					<div className="login-container">
						<form onSubmit={this.logIn}>
							<img src={avatar} alt="avatar" className="avatar" />
							<h2>Login</h2>
							<div className="input-div one focus ">
								<div className="i">
									<i className="fas fa-user" />
								</div>
								<div>
									<h5>Username</h5>
									<input
										placeholder="Username"
										className="input"
										name="username"
										type="text"
										value={this.state.username}
										onChange={this.onHandleChange}
									/>
								</div>
							</div>
							<div className="input-div two focus ">
								<div className="i">
									<i className="fas fa-lock" />
								</div>

								<div>
									<h5>Password</h5>
									<input
										placeholder="Password"
										className="input"
										name="password"
										type="password"
										value={this.state.password}
										onChange={this.onHandleChange}
									/>
								</div>
							</div>
							<div>
								{/* <Link className="lgn" to="/chat"> */}
								<input
									className="btn"
									type="submit"
									onClick={this.logIn}
									value="Login"
									style={{ height: '40px', padding: '8px' }}
								/>
								<Link className="btn" to="/register" style={{ padding: '8px', height: '40px' }}>
									Register
								</Link>
							</div>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}

	// onHandleChange = (e) => {
	// 	this.setState({ [e.target.name]: e.target.value });
	// };

	// logIn = (e) => {
	// 	e.preventDefault();
	// 	console.log(this.state.name);
	// 	console.log(this.state.password);

	// 	const dataLogin = {
	// 		name: this.state.name,
	// 		password: this.state.password
	// 	};
	// 	this.setState({ isLoading: true });

	// 	axios
	// 		.post('https://chattingers.herokuapp.com/api/login', dataLogin)
	// 		.then((res) => {
	// 			localStorage.setItem('data', JSON.stringify(res.data.user));
	// 			this.setState({ isLoading: false });
	// 			console.log(res);
	// 		})
	// 		.catch((err) => {
	// 			Swal.fire({
	// 				err,
	// 				icon: 'error',
	// 				title: 'Oops...',
	// 				text: 'Username Atau Password Anda Salah!'
	// 			});

	// 			console.log(err);
	// 		});
	// };

	// render() {
	// 	if (this.state.isLoading) {
	// 		return (
	// 			<div className="load">
	// 				<p>LOADING</p>
	// 			</div>
	// 		);
	// 	}
	// 	else if ( localStorage.getItem('data')) {
	// 	}

	// 	else
	// 	return (
	// 		<React.Fragment>
	// 			<img src={wave} alt="wave" className="wave" />
	// 			<div className="container1">
	// 				<div className="img">
	// 					<img src={img} alt="img" className="img" />
	// 				</div>
	// 				<div className="login-container">
	// 					<form onSubmit={this.logIn}>
	// 						<img src={avatar} alt="avatar" className="avatar" />
	// 						<h4>Login Page</h4>
	// 						<div className="input-div one">
	// 							<div className="i">
	// 								<i className="fas fa-user" />
	// 							</div>
	// 							<div>
	// 								<input
	// 									placeholder="Username"
	// 									className="input"
	// 									name="name"
	// 									type="text"
	// 									value={this.state.name}
	// 									onChange={this.onHandleChange}
	// 								/>
	// 							</div>
	// 						</div>
	// 						<div className="input-div two">
	// 							<div className="i">
	// 								<i className="fas fa-lock" />
	// 							</div>

	// 							<div>
	// 								<input
	// 									placeholder="Password"
	// 									className="input"
	// 									name="password"
	// 									type="password"
	// 									value={this.state.password}
	// 									onChange={this.onHandleChange}
	// 								/>
	// 							</div>
	// 						</div>
	// 						<div>
	// 							<button className="btn" type="submit">Login</button>

	// 							<button className="btn" type="submit">
	// 								daftar
	// 							</button>
	// 							<Link
	// 								to="/chat"
	// 								className="btn2"
	// 								type="submit"
	// 								style={{ width: '0', marginLeft: '170px' }}
	// 							>
	// 								<h5>Login</h5>
	// 							</Link>
	// 						</div>
	// 					</form>
	// 				</div>
	// 			</div>
	// 		</React.Fragment>
	// 	);
	// }
}

export default Login;
