import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import healthOperations from '../../redux/health/healthOperations';
import healthSelectors from '../../redux/health/healthSelectors';
import '../../styles/components/diaryDateCalendar.scss';

const DiaryDateCalendar = () => {
  const newDate = useSelector(healthSelectors.getDate);
  const [startDate, setStartDate] = useState(new Date(newDate));
  const dispatch = useDispatch();

  const handleChange = day => {
    setStartDate(day);
    const date = { date: moment(day).format('YYYY-MM-DD') };
    dispatch(healthOperations.getDayInfo(date));
    dispatch(healthOperations.setDate(date));
  };

  return (
    <>
      <div className='calendar'>
        <div className="datePicker">
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            dateFormat="d.MM.yyyy"
            className="inptDate"
            name="date"
          ></DatePicker>
          <svg width="18" height="20" className="iconCalendar" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 9H12V11H14V9Z" fill="#9B9FAA" />
            <path d="M10 9H8V11H10V9Z" fill="#9B9FAA" />
            <path d="M6.00008 9H4.00006V11H6.00008V9Z" fill="#9B9FAA" />
            <path d="M16 2.00001H15V0H13V2.00001H5.00001V0H3V2.00001H2.00001C0.890015 2.00001 0.0100313 2.90001 0.0100313 4.00003L0 18C0 19.1 0.890015 20 2.00001 20H16C17.1 20 18 19.1 18 18V3.99998C18 2.90001 17.1 2.00001 16 2.00001ZM16 18H2.00001V6.99998H16V18Z" fill="#9B9FAA" />
        </svg>
        </div>
      </div>
    </>
  );
};

export default DiaryDateCalendar;
