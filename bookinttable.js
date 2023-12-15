import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, e.g., send data to server
    console.log('Form submitted:', { name, numberOfPeople, date, time });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />

      <label>
        Number of People:
        <input
          type="number"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(parseInt(e.target.value, 10))}
          min="1"
          required
        />
      </label>
      <br />

      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <br />

      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>
      <br />

      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
