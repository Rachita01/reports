import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button} from '@material-ui/core';
import TableDatePicker from '../datepicker/datepicker';
import styled from 'styled-components';
import InfoCard from '../infocards/infocard';
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
  createRow("1/1/2022", 120034, 'SIT',100,90),
  createRow("2/1/2022", 1234, 'DEV',200,100),
  createRow("3/1/2022", 1034, 'REF',100,50),
  createRow("4/1/2022", 334, 'SIT',100,40),
  createRow("5/1/2022", 2049, 'DEV',50,10),
  createRow("6/1/2022", 230, 'SIT',300,250),
  createRow("7/1/2022", 8934, 'RFF',60,10),
  createRow("8/1/2022", 1246, 'DEV',10,3),
  createRow("9/1/2022", 483, 'RFF',1,0),
];

console.log(rows.filter(g => g.date === {}));
const sum = rows.map( r => r.pass);
const totaltc = rows.map(t => t.ttc);
const totalc = totaltc.reduce((c,d) => c+d,0);
const psum = sum.reduce((a,b) => a+b,0);
const passper = ((psum/totalc)*100).toFixed(2);
const envs = rows.map( r => r.env);
const unique = [...new Set(envs)];
const envc = unique.length;

export class Report extends React.Component{
  state = {
    startdate: "",
    enddate:""
   }

   getStartDate = (childStart) =>{
    this.setState({startdate: childStart})
   }

   getEndDate = (childEnd) =>{
    this.setState({enddate: childEnd})
   }

    render(){
      console.log(this.state.startdate);
      console.log(this.state.enddate);
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
            <Button className="selbutton" color = "primary" variant = "contained">Search</Button>
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
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.env}</TableCell>
              <TableCell>{row.ttc}</TableCell>
              <TableCell>{row.pass}</TableCell>
              <TableCell>{row.fail}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>

            </div>
    }
}