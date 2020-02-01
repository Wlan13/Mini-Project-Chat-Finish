import React from 'react'
import './boxcontact.css'

const BoxContact = ({clicktoRoom,imgcontact,namecontact}) => {
    return (
        <div className="row sideBar">
        <div className="row sideBar-body" onClick={clicktoRoom}>
            <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                    <img src={imgcontact} alt=""/>
                </div>
            </div>
            <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                    <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">{namecontact}</span>
                    </div>
                    <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BoxContact
