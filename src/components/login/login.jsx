import React from "react";
import LoginImg from '../../assets/img/login-user.jpg';
import Select from 'react-select';


const actions = [
    { label: "IGNIS", value: 1 },
    { label: "GASX", value: 2 },
    { label: "ZWEO", value: 3 }
  ];
export class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="base-container">
            <div className="header">Any Project Report</div>
            <div className="content">
                <div className="image">
                    <img src={LoginImg}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                </div>
                <div className="form-group">
                <label className="proj-label">Project</label>
                <Select className="select-proj" options={ actions } />
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Login
                    </button>
                </div>
            </div>
        </div>
        </div>
    }
}