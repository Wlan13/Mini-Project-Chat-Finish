import React from 'react';

import './SendInput.css';
const SendInput = ({inputDiv, sendChat, handleChat, inputId, submitChat }) => {
	return (
		<div className="div-send" style={{zIndex: 999}} id={inputDiv}>
			<input className="send-input" onChange={handleChat} onSubmit={submitChat} id={inputId} placeholder="Masukkan Pesan" />
            <i className="material-icons click-send" onClick={sendChat}>send</i>
		</div>
	);
};

export default SendInput;
