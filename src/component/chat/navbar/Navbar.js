import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize';

import logo from './Logo.png';

import './navbar.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

import './navbar.css';
export class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			alldata: [],
			user: '',
			name: '',
			email: '',
			no_telp: '',
			avatar: null
		};
	}
	componentDidMount() {
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.sidenav');
			M.Sidenav.init(elems);
		});

		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.modal');
			M.Modal.init(elems);
		});
	/* 	document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.autocomplete');
			M.Autocomplete.init(elems);
		}); */

		const state = localStorage.getItem('data');
		const data = JSON.parse(state);

		this.setState({
			user: data
		});

		this.getnewUser();
	}
	handleUser = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleUserImage = (e) => {
		const avatar = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(avatar);
		reader.onloadend = () => {
			this.setState(
				{
					avatar: avatar,
					base64: reader.result
				},
				() => console.log(this.state.avatar)
			);
			this.uploadImage();
		};
	};

	uploadImage = () => {
		const id = this.state.user.id;
		const avatar = this.state.base64;

		axios
			.put(`https://calm-mesa-84057.herokuapp.com/avatar/edit`, {
				id,
				avatar
			})
			.then((res) => {
				Swal.fire({
					icon: 'success',
					title: 'Image berhasil diganti !'
				});
				this.getnewUser();
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: 'Error!'
				});
			});
	};
	getnewUser = () => {
		const id = this.state.user.id;
		axios
			.get(`https://calm-mesa-84057.herokuapp.com/tampil/${id}`)
			.then((res) => {
				localStorage.setItem('data', JSON.stringify(res.data));

				this.setState({
					user: res.data
				});
			})
			/* .catch((err) => {
				err;
			}); */
	};
	// getAllData = () => {
	// 	axios
	// 	.get(`https://calm-mesa-84057.herokuapp.com/tampil`)
	// 	.then((res) => {
	// 		this.setState({
	// 			alldata: res.data
	// 		});
	// 	});
	// };
	updateUser = () => {
		const id = this.state.user.id;
		const name = this.state.name;
		const email = this.state.email;
		const no_telp = this.state.no_telp;

		axios
			.put(`https://calm-mesa-84057.herokuapp.com/user/edit`, {
				id,
				name,
				email,
				no_telp
			})
			.then((res) => {
				Swal.fire({
					icon: 'success',
					title: 'success'
				});
				this.getnewUser();
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: 'error'
				});
				console.log(err);
			});
	};

	updateAvatar = () => {
		const id = this.state.user.id;
		const avatar = this.state.avatar;

		axios
			.put(`https://calm-mesa-84057.herokuapp.com/avatar/edit`, {
				id,
				avatar
			})
			.then((res) => {
				Swal.fire({
					icon: 'success',
					title: 'success'
				});
				this.getnewUser();
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: 'error'
				});
				console.log(err);
			});
	};

	friendProfile = () => {
		const id = this.state.user.id;
		const name = this.state.name;
		const email = this.state.email;
		const no_telp = this.state.no_telp;

		axios.get(`https://calm-mesa-84057.herokuapp.com/tampil`, {
			id,
			name,
			email,
			no_telp
		});
	};

	updatePrivacy = () => {
		const id = this.state.user.id;
		const username = this.state.username;
		const password = this.state.password;

		axios
			.put(`https://calm-mesa-84057.herokuapp.com/private/edit`, {
				id,
				username,
				password
			})
			.then((res) => {
				Swal.fire({
					icon: 'success',
					title: 'success'
				});
				this.getnewUser();
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: 'error'
				});
				console.log(err);
			});
	};

	logOut() {
		localStorage.removeItem('token');
		localStorage.removeItem('data');
	}

	render() {
		if (localStorage.getItem('token') === null) {
			return <Redirect to="/login" />;
		}
		return (
			<React.Fragment>
				<nav style={{ background: '#38d39f', display: 'flex' }}>
					<ul id="slide-out" className="sidenav">
						<li>
							<div className="user-view">
								<div className="background" style={{ background: '#38d39f' }} />
								<img
									className="avatar"
									alt=""
									src={this.state.user.avatar}
									style={{ border: 'none', background: 'white' }}
								/>
								<div className="img_upload">
									<label htmlFor="upload_img">
										<i className="fa fa-camera" />
									</label>
									<input
										type="file"
										onChange={this.handleUserImage}
										id="upload_img"
										name="avatar"
										className="autocomplete"
									/>
								</div>
								<span className="white-text name">{this.state.user.name}</span>
								<span className="white-text email">{this.state.user.email}</span>
							</div>
						</li>

						<li>
							<a className="left-align subheader">Ai Chat</a>
						</li>

						<li>
							<a
								href="#edituser"
								style={{ textDecoration: 'none' }}
								className="left-align modal-trigger"
								data-target="edituser"
							>
								Edit Pengguna
								<i className="material-icons">edit</i>
							</a>
						</li>

						<li>
							<a
								href="#editprivate"
								style={{ textDecoration: 'none' }}
								className="left-align modal-trigger"
								data-target="editprivate"
							>
								Edit Privasi
								<i className="material-icons">lock_outline</i>
							</a>
						</li>
						<li>
							<a
								href="#about"
								style={{ textDecoration: 'none' }}
								className="left-align modal-trigger"
								data-target="about"
							>
								Tentang
								<i className="material-icons">info_outline</i>
							</a>
						</li>
						<li>
							<div className="divider" />
						</li>

						<li>
							<a href="" style={{ textDecoration: 'none' }} className="left-align" onClick={this.logOut}>
								Keluar
								<i className="material-icons">power_settings_new</i>
							</a>
						</li>
					</ul>
					<p href="#" style={{ cursor: 'pointer' }} data-target="slide-out" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</p>
					<p style={{ fontFamily: 'Ma Shan Zheng, cursive', fontSize: '20px' }}>Ai Chat</p>
					<img
						src={this.props.friendsimg}
						alt=""
						style={{
							position: 'relative',
							height: '60px',
							width: '60px',
							borderRadius: '100%',
							left: '300px'
						}}
					/>
					<p
						style={{
							fontFamily: 'Ma Shan Zheng, cursive',
							fontSize: '20px',
							position: 'relative',
							left: '320px',
							cursor: 'pointer'
						}}
						href="#friends"
						className="modal-trigger"
						data-target="friends"
					>
						{this.props.friendsname}
					</p>
				</nav>

				{/* Modal Edit Avatar */}

				<div id="editavatar" className="modal modal-fixed-footer" style={{ width: 750 }}>
					<div className="modal-content">
						<h4 className="center-align">Edit Avatar</h4>
					</div>
					<div style={{ position: 'relative', bottom: 120, padding: '50px' }}>
						<div className="row">
							<div className="col s12">
								<div className="row">
									<div className="input-field col s12">
										<i className="material-icons prefix">perm_identity</i>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<a className="modal-close waves-effect waves-green btn-flat" onClick={this.updateAvatar}>
							Simpan
						</a>
					</div>
				</div>

				{/* Modal Edit Privacy */}

				<div id="editprivate" className="modal modal-fixed-footer" style={{ width: 750 }}>
					<div className="modal-content">
						<h4 className="center-align">Edit Privasi</h4>
						<div className="space-50" />
						<div>
							<div className="input-field">
								<i className="material-icons prefix">perm_identity</i>
								<input
									type="text"
									onChange={this.handleUser}
									id="username"
									name="username"
									className="autocomplete"
								/>
								<label htmlFor="username">Username</label>
							</div>
							<div className="space-50" />

							<div className="input-field ">
								<i className="material-icons prefix">lock</i>
								<input
									type="password"
									onChange={this.handleUser}
									id="password"
									name="password"
									className="autocomplete"
								/>
								<label htmlFor="password">Password</label>
							</div>
						</div>
					</div>

					<div className="modal-footer">
						<a className="modal-close waves-effect waves-green btn-flat" onClick={this.updatePrivacy}>
							Simpan
						</a>
					</div>
				</div>

				{/* Modal Edit User */}

				<div id="edituser" className="modal modal-fixed-footer" style={{ width: 750 }}>
					<div className="modal-content">
						<h4 className="center-align">Edit Pengguna</h4>
						<div className="space-50" />
						<div>
							<div className="input-field">
								<i className="material-icons prefix">perm_identity</i>
								<input
									type="text"
									onChange={this.handleUser}
									id="name"
									name="name"
									className="autocomplete"
								/>
								<label htmlFor="name">Name</label>
							</div>
							<div className="space-30" />

							<div className="input-field ">
								<i className="material-icons prefix">email</i>
								<input
									type="text"
									onChange={this.handleUser}
									id="email"
									name="email"
									className="autocomplete"
								/>
								<label htmlFor="email">Email</label>
							</div>
							<div className="space-30" />

							<div className="input-field ">
								<i className="material-icons prefix">call</i>
								<input
									type="text"
									onChange={this.handleUser}
									id="phone"
									name="no_telp"
									className="autocomplete"
								/>
								<label htmlFor="phone">Phone</label>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<a className="modal-close waves-effect waves-green btn-flat" onClick={this.updateUser}>
							Simpan
						</a>
					</div>
				</div>

				{/* Modal Profile Friends */}

				<div id="friends" className="modal " style={{ width: 500 }}>
					<div className="modal-content" style={{ background: '#38d39f', height: '200px' }}>
						<div className="row">
							<h5 className="left-align" style={{ position: 'relative', left: '10px' }}>
								Tentang Akun
							</h5>
							<div className="space-50" />

							<div className="user-view">
								<div className="background" style={{ background: '#38d39f' }} />
								<div className="col">
									<img
										className="avatar"
										alt=""
										src={this.props.friendsimg}
										style={{
											border: 'none',
											background: 'white',
											position: 'absolute',
											right: '36vw',
											top: '1vh'
										}}
									/>
								</div>
								<div className="col s5 push-s7">
									<p
										style={{
											position: 'absolute',
											right: '-2vw',
											top: '2vh'
										}}
									>
										Nama
									</p>
									<span
										className=""
										style={{
											color: '#EEEEEE',
											padding: '50px',
											position: 'absolute',
											right: '-7.5vw',
											top: '-1vh'
										}}
									>
										{this.props.friendsname}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<i
							className="material-icons prefix"
							style={{ position: 'absolute', left: '4vw', fontSize: '50px', bottom: '25vh' }}
						>
							email
						</i>
						<p
							style={{
								position: 'absolute',
								left: '10vw',
								top: '41vh',
								color: '#9E9E9E'
							}}
						>
							Email
						</p>
						<span
							className="black-text email"
							style={{
								position: 'absolute',
								left: '10vw',
								top: '37.5vh'
							}}
						>
							{this.props.friendsemail}
						</span>
					</div>
					<div>
						<i
							className="material-icons prefix"
							style={{ position: 'absolute', left: '4vw', fontSize: '50px', bottom: '10vh' }}
						>
							local_phone
						</i>
						<p
							style={{
								position: 'absolute',
								left: '10vw',
								top: '56vh',
								color: '#9E9E9E'
							}}
						>
							Telphone
						</p>
						<span
							className="black-text email"
							style={{
								position: 'absolute',
								left: '10vw',
								top: '52.5vh'
							}}
						>
							{this.props.friendstelp}
						</span>
					</div>
				</div>

				{/* Modal About */}
				<div id="about" className="modal" style={{ width: 750, background: 'linear{to right, red, blue}' }}>
					<div className="modal-content" style={{ background: 'white' }}>
						<h4
							className="center-align"
							style={{
								background: '#38d39f',
								position: 'relative',
								right: '10vw',
								bottom: '4vh',
								width: '70vw',
								height: '10vh',
								padding: '19px',
								color: '#ffffff'
							}}
						>
							Tentang Ai Chat
						</h4>
						<div className="space-50" />
						<img
							src={logo}
							alt=""
							style={{
								width: '23vw',
								position: 'relative',
								left: '14vw',
								bottom: '10vh',
								margin: '0',
								padding: '0'
							}}
						/>
						<p style={{ position: 'relative', bottom: '8vh', left: '21.3vw', fontSize: '20px' }}>
							Version 0.1.0
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Navbar;
