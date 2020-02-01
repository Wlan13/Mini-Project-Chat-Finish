import React from 'react';
import './register.css';
import wave from './waves_corner.png';
import img from './undraw_progressive_app_m9ms.svg';
import avatar from './undraw_male_avatar_323b.svg';

import 'materialize-css/dist/css/materialize.min.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

export class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			name: '',
			email: '',
			no_telp: ''
		};
	}
	onHandleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	signIn = (e) => {
		e.preventDefault();
		console.log(this.state.username);
		console.log(this.state.password);
		console.log(this.state.name);
		console.log(this.state.email);
		console.log(this.state.no_telp);

		const dataInput = {
			username: this.state.username,
			password: this.state.password,
			name: this.state.name,
			email: this.state.email,
			no_telp: this.state.no_telp
		};
		/* this.setState({ isLoading: true }); */

		axios
			.post('https://calm-mesa-84057.herokuapp.com/register', dataInput)
			.then((res) => {
				localStorage.setItem('data', res.data.data.user);
				console.log(res);
				/* this.setState({ isLoading: false }); */
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
	/* 	if (this.state.isLoading) {
			return (
				<div className="load">
					<p>LOADING</p>
				</div>
			);
		} */
		return (
			<React.Fragment>
				{/* <div className="row">
					<form className="col s12">
						<div className="row">
							<div className="input-field col s6">
								<i className="material-icons prefix"></i>
								<input id="icon_prefix" type="text" className="validate" />
								<label for="icon_prefix">First Name</label>
							</div>
							<div className="input-field col s6">
								<i className="material-icons prefix"></i>
								<input id="icon-telephone" type="tel" className="validate" />
								<label for="icon_telephone">Telephone</label>
							</div>
						</div>
					</form>
				</div> */}

				<img src={wave} alt="wave" className="wave" />
				<div className="container1">
					<div className="img">
						<img src={img} alt="img" className="img" />
					</div>
					<div className="login-container">
						<form onSubmit={this.signIn}>
							<img src={avatar} alt="avatar" className="avatar" />
							<h2>Welcome</h2>
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
							<div className="input-div one focus ">
								<div className="i">
									<i className="fas fa-id-card" />
								</div>
								<div>
									<h5>Name</h5>
									<input
										placeholder="Name"
										className="input"
										name="name"
										type="text"
										value={this.state.name}
										onChange={this.onHandleChange}
									/>
								</div>
							</div>
							<div className="input-div one focus ">
								<div className="i">
									<i className="fas fa-at" />
								</div>

								<div>
									<h5>Email</h5>
									<input
										placeholder="Email"
										className="input"
										name="email"
										type="email"
										value={this.state.email}
										onChange={this.onHandleChange}
									/>
								</div>
							</div>

							<div className="input-div two focus ">
								<div className="i">
									<i className="fas fa-phone" />
								</div>

								<div>
									<h5>Telphone</h5>
									<input
										placeholder="Telphone"
										className="input"
										name="no_telp"
										type="number"
										value={this.state.no_telp}
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
								<button className="btn" type="submit">
									Register
								</button>
								<Link className="lgn" to="/login">
									<input className="btn" type="submit" value="Login" />
								</Link>

								{/* <Link className="lgn" to="/login">
									Login
								</Link> */}
							</div>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Register;
