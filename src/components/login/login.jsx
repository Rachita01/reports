import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginImg from '../../assets/img/login-user.jpg';
import { MenuItem, Select } from '@material-ui/core';
import data from '../../table.json';

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [project,setProject] = useState("");

    var projlist =  data.find(d => d.Username === username );
    var projects = projlist ? projlist.Project.split(',') : [];
    
    function validateForm() {
        return username.length > 0 && password.length > 0;
    }
    
    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleProjectChange(e) {
        setProject(e.target.value);
    }
   
    return (<div className="base-container">
        <div className="header">Any Project Report</div>
        <div className="content">
            <div className="image">
                <img src={LoginImg} alt="Login user" />
            </div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="proj-label">Project</label>
                    <Select className="select-proj"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={project}
                        label="Project"
                        onChange={handleProjectChange}
                    >
                        {projects ? projects.map((a) => { return (<MenuItem key={a} value={a}>{a}</MenuItem>) }) : []}
                        
                    </Select>

                </div>
                <div className="footer">
                    <Link className="linkstyle" to='/dashboard' state={{username:username, plist:projects,project:project}}><button disabled={!validateForm} type="button" className="btn" onSubmit={handleSubmit}>Login</button></Link>
                </div>

            </div>
        </div>
    </div>
    );
}