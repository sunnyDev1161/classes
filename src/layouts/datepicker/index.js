import React from 'react';
import Datetime from 'react-datetime';
import './style.css';

export default function CustomDateTime(props) {
  return (
    <div className="datetime-wrapper">
      <i className="far fa-calendar-alt" />
      <Datetime defaultValue={new Date()} />
    </div>
  );
}
