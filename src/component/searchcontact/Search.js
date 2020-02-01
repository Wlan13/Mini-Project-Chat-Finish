import React, { Component } from 'react';

export default class Search extends Component {
	render() {
		return (
			<div className="input-field">
				<input
					className="validate"
					value={this.props.valueSearch}
					onClick={this.props.handleSearch}
					onChange={this.props.handleSearch}
					style={{ width: 400 }}
					id="search"
					type="text"
				/>
				<label htmlFor="search"><i className="fas fa-search"/>&nbsp;Cari kontak</label>
			</div>
		);
	}
}
