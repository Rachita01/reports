import React, { Component } from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

class ChartReport extends Component{
  constructor(props){
    super(props);
    const showdata = this.props.data;
    const totalcase = showdata.map(tc => tc.ttc).reduce((a,b)=>a+b,0);
    const passcase = showdata.map(pc => pc.pass).reduce((c,d)=>c+d,0);
    const failcase = showdata.map(fc => fc.fail).reduce((e,f)=>e+f,0);
    console.log(totalcase, passcase, failcase);
    console.log(totalcase);
    this.state = {
      chartData:  {
        labels:['No. of Pass TC', 'No. of Fail TC'],
        datasets:[
          {
            label:'Test Cases Result',
            data:[
              passcase,
              failcase
            ],
            backgroundColor:[
              'rgba(255,99,132,0.6)',
              'rgba(54,162,235,0.6)'
            ]
          }
        ]
      }
    }
  }
  render(){
    return(
      <div style={{display:'flex',paddingTop:'80px',paddingLeft:'50px'}}>
      <div style={{height:'40vh',width:'30vw'}}>
        <Bar
        data={this.state.chartData}
        options={{maintainAspectRatio:false
        }}/>
       </div>
       <div style={{height:'40vh',width:'30vw'}}>
       <Pie
        data={this.state.chartData}
        options={{maintainAspectRatio:false}}
      />
       </div>
       <div style={{height:'40vh',width:'30vw'}}>
       <Line 
        data={this.state.chartData}
        options={{maintainAspectRatio:false}}
      />
      </div>
       </div>
    )
  }
}

export default ChartReport;
