import React from 'react'
import login from '../../Pictures/Login.gif'
import './style.scss'

export default class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="base-container">
                <div className="header">Login</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Login
                    </button>
                    <div className="image">
                        <img src={login} alt="login" />
                    </div>
                </div>
            </div>
        )
    }
}