import React from 'react';
import img from './delete.png';
import Navbar from './Navbar';

const Records = ({ data, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className='records'>
      <Navbar />
      {/* Loop through the data array and display each item */}
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <span onClick={() => handleDelete(item.id)}>
            <img src={img} alt='Delete' />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Records;
