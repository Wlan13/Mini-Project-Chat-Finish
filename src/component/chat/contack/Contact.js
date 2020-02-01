import React, { Component } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import BoxContact from '../boxcontact/boxContact';
import Search from '../../searchcontact/Search';

export default class Contact extends Component {
	constructor() {
		super();
		this.state = {
			alldata: [],
			resultsearch: ''
		};
	}

	componentDidMount() {
		this.getAllDatta();
	}

	getAllDatta = () => {
		console.log(this.state.alldata);
		axios
			.get('https://calm-mesa-84057.herokuapp.com/tampil')
			.then((res) => {
				this.setState(
					{
						alldata: res.data
					},
					() => console.log(this.state.alldata)
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleSearch = (e) => {
		e.preventDefault();
		this.setState({
			resultsearch: e.target.value.substr(0, 20)
		});
	};
	render() {
		let filtersearch = this.state.alldata.filter((item) => {
			return item.name.toLowerCase().indexOf(this.state.resultsearch.toLowerCase()) !== -1;
		});
		return (
			<React.Fragment>
				<div className="Container">
					<Search handleSearch={this.handleSearch} />
					<div className="space-30" />
					<div className="list-contact">
						<div className="scroll-contact">
							{filtersearch.map((item, index) => {
								return (
									<div key={index}>
										<BoxContact
											clicktoRoom={this.props.clicktoRoom.bind(this, item)}
											imgcontact={item.avatar}
											namecontact={item.name}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
