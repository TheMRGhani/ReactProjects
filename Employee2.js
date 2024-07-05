// Using Functional component
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    empId: '',
    salary: '',
    department: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const { name, empId, salary, department } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Enter Employee Details</h2>
      <form id='employee-form' onSubmit={handleSubmit} className='border p-4 shadow-sm'>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            className="form-control" 
            value={name} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Employee ID:</label>
          <input 
            type="text" 
            name="empId" 
            className="form-control" 
            value={empId} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input 
            type="text" 
            name="salary" 
            className="form-control" 
            value={salary} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input 
            type="text" 
            name="department" 
            className="form-control" 
            value={department} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
      {submitted && (
        <div className='mt-4 p-4 border shadow-sm'>
          <h2>Employee Details</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>ID:</strong> {empId}</p>
          <p><strong>Salary:</strong> {salary}</p>
          <p><strong>Department:</strong> {department}</p>
        </div>
      )}
    </div>
  );
}

export default App;
