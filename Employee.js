//first install bootstrap -> npm install bootstrap
//import in react js file -> import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      empId: '',
      salary: '',
      department: '',
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    const { name, empId, salary, department, submitted } = this.state;
    return (
      <div className='container mt-5'>
        <h2 className='text-center mb-4'>Enter Employee Details</h2>
        <form id='employee-form' onSubmit={this.handleSubmit} className='border p-4 shadow-sm'>
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              value={name} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Employee ID:</label>
            <input 
              type="text" 
              name="empId" 
              className="form-control" 
              value={empId} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Salary:</label>
            <input 
              type="text" 
              name="salary" 
              className="form-control" 
              value={salary} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input 
              type="text" 
              name="department" 
              className="form-control" 
              value={department} 
              onChange={this.handleChange} 
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
}

export default Employee;
