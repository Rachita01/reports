import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import './dashboard.css';
import Logo from '../../assets/img/logo.jpg';
import { MenuItem, Select } from '@material-ui/core';
import { Report } from "../reports/report";

export function Dashboard(){
    const location = useLocation();
    const user = location.state?.username;
    const plist = location.state?.plist;
    const project = location.state?.project;
    const [sproject, setSproject] = useState(project);
    

    function handleSelectProject(e){
       setSproject(e.target.value);
    }
    return (
        <div className="dashboard">
            
        <nav className="nav">
            <navlogo className="nav-logo">
            <img src={Logo} alt="Logo" />
            </navlogo>
            <navheader className="nav-header">
                <p>Sopra Steria Test Automation Dashboard</p>
            </navheader>
            <navuser className="nav-user">
                <p>Welcome {user}</p>
                <navproject className="nav-project">
                <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sproject}
        label="Project"
        onChange={handleSelectProject}>
        { plist.map((a) => { return (<MenuItem key={a} value={a}>{a}</MenuItem>) })}  
         </Select>
            </navproject>
            </navuser>    
        </nav>
        
        <Report project={sproject}/>
    </div>
    )
}

