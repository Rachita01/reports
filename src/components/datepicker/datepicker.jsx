import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';
const Styles = styled.div`
 .react-datepicker-wrapper,
 .react-datepicker__input-container,
 .react-datepicker__input-container input {
   width: 80px;
   margin-right:25%;
  
 },
 .react-datepicker-popper[data-placement^=bottom] {
    z-index: 9;
}
`;
export default function TableDatePicker(props) {
 const [startDate, setStartDate] = useState(null);
 const [endDate, setEndDate] = useState(null);
  
 return (
 
   <div>
       <Styles>
       <DatePicker
       placeholderText="Select Start Date"
       dateFormat="d/M/yyyy"
       selected={startDate}
       selectsStart
       startDate={startDate}
       endDate={endDate}
       onChange={date => setStartDate(date)}
       onSelect={startDate => props.startDate(startDate)}
     />
     <DatePicker
       placeholderText="Select End Date"
       dateFormat="d/M/yyyy"
       selected={endDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={date => setEndDate(date)}
       onSelect={endDate => props.endDate(endDate)}
     />
       </Styles>
     
   </div>
 );

}