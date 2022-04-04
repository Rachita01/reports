import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button} from '@material-ui/core';
import TableDatePicker from '../datepicker/datepicker';
import styled from 'styled-components';
import InfoCard from '../infocards/infocard';
import moment from 'moment';
import ChartReport from '../charts/chartreport';
const Styles = styled.div`
 .MuiButton-root{
     margin-top:-125px;
     margin-left:800px;
     padding:5.5px 16px;
 }
}
`;
function failCase(ttc, pass){
    return ttc - pass;
}
function createRow(date, id, env,ttc,pass) {
    const fail = failCase(ttc,pass);
  return { date, id, env, ttc, pass, fail};
}

const rows = [
  createRow("1/13/2022", 126034, 'SIT',170,90),
  createRow("1/20/2022", 1294, 'DEV',320,100),
  createRow("1/25/2022", 456, 'REF',10,4),
  createRow("1/31/2022", 348, 'SIT',10,7),
  createRow("3/1/2022", 12034, 'SIT',340,90),
  createRow("3/2/2022", 1234, 'DEV',200,100),
  createRow("3/3/2022", 1034, 'REF',100,50),
  createRow("3/4/2022", 334, 'SIT',100,40),
  createRow("3/5/2022", 2049, 'DEV',50,10),
  createRow("3/6/2022", 230, 'SIT',300,250),
  createRow("3/7/2022", 8934, 'RFF',60,10),
  createRow("3/8/2022", 1246, 'DEV',10,3),
  createRow("3/9/2022", 483, 'RFF',1,0),
  createRow("2/10/2022", 654, 'SIT',94,3),
  createRow("2/12/2022", 585, 'RFF',1,0),
  createRow("2/13/2022", 34, 'DEV',575,5),
  createRow("2/14/2022", 495, 'RFF',1,0)
];

const displayDate = (fd) => {
  const newDate = new Date(fd);
  return `${newDate.getDate() < 10 ? '' : ''}${newDate.getDate()}/${newDate.getMonth() < 9 ? '' : ''}${newDate.getMonth() + 1}/${newDate.getFullYear()}`
}
const sum = rows.map( r => r.pass);
const totaltc = rows.map(t => t.ttc);
const totalc = totaltc.reduce((c,d) => c+d,0);
const psum = sum.reduce((a,b) => a+b,0);
const passper = ((psum/totalc)*100).toFixed(2);
const envs = rows.map( r => r.env);
const unique = [...new Set(envs)];
const envc = unique.length;
let sdate;
let edate;

export class Report extends React.Component{
  state = {
    startdate: "",
    enddate:"",
    showFil:false
   }
   
   getStartDate = (childStart) =>{
    this.setState({startdate: childStart});
    this.setState({showFil:false});

   }
   getEndDate = (childEnd) =>{
    this.setState({enddate: childEnd})
   }

   getFiltData = () => {
     this.setState({showFil:true});
     
   }
  
    render(){
      sdate = new Date(this.state.startdate).toLocaleString('en-US', {
        day:   'numeric',
        month: 'numeric',
        year:  'numeric',
    });
      edate = new Date(this.state.enddate).toLocaleString('en-US',{
        day:   'numeric',
        month: 'numeric',
        year:  'numeric',
      });
      
        return <div>
            <p>{this.props.project} REPORT</p>
            <InfoCard title="Pass %" info={`${passper}%`} style={{
                width: 120,
                backgroundColor: "#e6f9fa",
                marginTop:100,
                marginLeft:60,
                float:"left"
            }}/>
            <InfoCard title="Total TC" info={totalc} style={{
                width: 120,
                backgroundColor: "#e6f9fa",
                marginTop:250,
                marginLeft:-120,
                float:"left"
            }}/>
            <InfoCard title="Test Execution Date" info="1/2/2022" style={{
                width: 140,
                backgroundColor: "#e6f9fa",
                marginTop:95,
                marginRight:40,
                float:"right"
            }}/>
            <InfoCard title="Total Environments" info={envc} style={{
                width: 140,
                backgroundColor: "#e6f9fa",
                marginTop:250,
                marginRight:-140,
                float:"right"
            }}/>
            <div>
            <TableDatePicker startDate = {this.getStartDate} endDate = {this.getEndDate}/>
            <Styles>
            <Button onClick={this.getFiltData} className="selbutton" color = "primary" variant = "contained">Search</Button>
            </Styles>
            </div>
    
    <TableContainer style={{ width: 900, marginLeft:280 ,height:400}} component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>RunID</TableCell>
            <TableCell>Environment</TableCell>
            <TableCell>Total TC</TableCell>
            <TableCell>Pass</TableCell>
            <TableCell>Fail</TableCell>
          </TableRow>
        </TableHead>
        {this.state.showFil ? <TableBody>
          {rows.filter(val=>(moment(val.date).isBetween(moment(sdate).subtract(1,'d'),moment(edate).add(1,'d')))).map((row) => 
            <TableRow key={row.id}>
              <TableCell>{displayDate(row.date)}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.env}</TableCell>
              <TableCell>{row.ttc}</TableCell>
              <TableCell>{row.pass}</TableCell>
              <TableCell>{row.fail}</TableCell>
            </TableRow>)}
            </TableBody> : <TableBody>
          {rows.map((row) => 
            <TableRow key={row.id}>
              <TableCell>{displayDate(row.date)}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.env}</TableCell>
              <TableCell>{row.ttc}</TableCell>
              <TableCell>{row.pass}</TableCell>
              <TableCell>{row.fail}</TableCell>
            </TableRow>
     )}
    </TableBody>}
      </Table>
    </TableContainer>
    <ChartReport data={rows}/>
            </div>
    }
}