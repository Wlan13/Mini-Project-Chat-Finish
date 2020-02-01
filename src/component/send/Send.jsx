import React from 'react'
import './Send.css';

export default function Send({textsend}) {
        return (
            <div>
                <div className="send darker">
                         <p>{textsend}</p>
					</div> 
            </div>
        )
    }
