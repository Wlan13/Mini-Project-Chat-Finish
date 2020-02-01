import React, { Component } from 'react';
import './chatContainer.css';
import Navbar from './navbar/Navbar';
import axios from 'axios';
import Contact from './contack/Contact';
import Send from '../send/Send';
import Receiver from '../receiverr/Receiver';
import SendInput from '../sendinput/SendInput';
/* import Swal from 'sweetalert2';
 */
export class chatContainer extends Component {
	constructor() {
		super();
		this.state = {
			mydata: '',
			allchat: [],
			name: '',
			telp: '',
			email: '',
			password: '',
			avatarfriends: null,
			namefriends: '',
			emailfriends: '',
			idfriends: '',
			phonefriends: '',
			chatvalue: ''
		};
	}
	componentDidMount() {
		const statedata = localStorage.getItem('data');
		const myData = JSON.parse(statedata);

		this.setState({
			mydata: myData
		});

		this.getSend();
		setInterval(this.getSend, 2000);
	}
	onHandleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	clicktoRoom = (item) => {
		this.setState({
			idfriends: item.id,
			avatarfriends: item.avatar,
			namefriends: item.name,
			emailfriends: item.email,
			phonefriends: item.no_telp
		});
		document.getElementById('inputDiv').style.display = 'block';
	};

	// deleteChat = (e) => {
	// 	this.setState({
	// 		sender_id: this.state.sender_id,
	// 		message: this.state.message
	// 	});
	// };

	// chat

	handleChat = (e) => {
		e.preventDefault();

		this.setState({
			chatvalue: e.target.value
		});
	};

	sendChat = (e) => {
		e.preventDefault();
		const sender_id = this.state.mydata.id;
		const receiver_id = this.state.idfriends;
		const text = this.state.chatvalue;

		axios
			.post('https://calm-mesa-84057.herokuapp.com/message/send', {
				sender_id,
				receiver_id,
				text
			})
			.then((res) => {
				document.getElementById('myinput', res).value = '';
				this.getSend();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	getSend = () => {
		const sender_id = this.state.mydata.id;
		const receiver_id = this.state.idfriends;
		axios.get(`https://calm-mesa-84057.herokuapp.com/message/${sender_id}/${receiver_id}`).then((res) => {
			this.setState({
				allchat: res.data.message
			});
		});
	};

	render() {
		return (
			<div>
				<Navbar
					friendsimg={this.state.avatarfriends}
					friendsname={this.state.namefriends}
					friendsemail={this.state.emailfriends}
					friendstelp={this.state.phonefriends}
				/>
				<div className="chat-room">
					<div className="chat-live">
						{this.state.allchat.map((message) => {
							return (
								<div>
									{this.state.mydata.id === message.sender_id ? (
										<Send textsend={message.text} />
									) : (
										<Receiver textreceiver={message.text} />
									)}
								</div>
							);
						})}
						<SendInput
							inputDiv="inputDiv"
							handleChat={this.handleChat}
							inputId="myinput"
							submitChat={this.sendChat}
							sendChat={this.sendChat}
						/>
					</div>
				</div>
				<Contact clicktoRoom={this.clicktoRoom} />
			</div>
		);
	}
}

export default chatContainer;
