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
 const displayDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate() < 10 ? '' : ''}${newDate.getDate()}/${newDate.getMonth() < 9 ? '' : ''}${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  }
  console.log(props);
  console.log(displayDate(startDate).toString());
  console.log(displayDate(endDate).toString());
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
       onChange={date => setStartDate(date) && props.startDate(displayDate(startDate).toString())}
     />
     <DatePicker
       placeholderText="Select End Date"
       dateFormat="d/M/yyyy"
       selected={endDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={date => setEndDate(date) && props.endDate(displayDate(endDate).toString())}
     />
       </Styles>
     
   </div>
 );

}