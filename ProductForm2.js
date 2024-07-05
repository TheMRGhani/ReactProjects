// Product Form Using Functional component

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [formData, setFormData] = useState({
    ProductID: '',
    ProductName: '',
    ProductCost: '',
    ProductOnline: 'Yes', // Assuming default value is 'Yes'
    ProductCategory: '',
    AvailableStore: [],
  });
  const [data, setData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const { ProductID, ProductName, ProductCost, ProductOnline, ProductCategory, AvailableStore } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setFormData({
        ...formData,
        AvailableStore: [...AvailableStore, name],
      });
    } else {
      setFormData({
        ...formData,
        AvailableStore: AvailableStore.filter(store => store !== name),
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      ProductID,
      ProductName,
      ProductCost,
      ProductOnline,
      ProductCategory,
      AvailableStore: AvailableStore.join(', '),
    };
    setData([...data, newData]);
    setFormData({
      ProductID: '',
      ProductName: '',
      ProductCost: '',
      ProductOnline: 'Yes',
      ProductCategory: '',
      AvailableStore: [],
    });
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Product List</h2>
      <form className="col g-3" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="ProductID" className="col-sm-2 col-form-label">Product ID</label>
          <div className='col-sm-5'>
            <input
              type="text"
              className="form-control"
              id="ProductID"
              name="ProductID"
              value={ProductID}
              onChange={handleChange}
              placeholder='Enter Product ID'
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ProductName" className="col-sm-2 col-form-label">Product Name</label>
          <div className='col-sm-5'>
            <input
              type="text"
              className="form-control"
              id="ProductName"
              name="ProductName"
              value={ProductName}
              onChange={handleChange}
              placeholder='Enter Product Name'
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ProductCost" className="col-sm-2 col-form-label">Product Cost</label>
          <div className='col-sm-5'>
            <input
              type="text"
              className="form-control"
              id="ProductCost"
              name="ProductCost"
              value={ProductCost}
              onChange={handleChange}
              placeholder='Enter Product Cost'
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label pt-0">Product Online</label>
          <div className='col-sm-8'>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="ProductOnline"
                id="onlineYes"
                value="Yes"
                checked={ProductOnline === 'Yes'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="onlineYes">Yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="ProductOnline"
                id="onlineNo"
                value="No"
                checked={ProductOnline === 'No'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="onlineNo">No</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ProductCategory" className="col-sm-2 col-form-label pt-0">Product Category</label>
          <div className='col-sm-10'>
            <select
              id="ProductCategory"
              name="ProductCategory"
              className="form-select"
              value={ProductCategory}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              <option value="Mobile">Mobile</option>
              <option value="Clothes">Clothes</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">Available Store</div>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Big Bazar"
                id="storeBigBazar"
                checked={AvailableStore.includes('Big Bazar')}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="storeBigBazar">Big Bazar</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="D Mart"
                id="storeDMart"
                checked={AvailableStore.includes('D Mart')}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="storeDMart">D Mart</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Reliance"
                id="storeReliance"
                checked={AvailableStore.includes('Reliance')}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="storeReliance">Reliance</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Mega Store"
                id="storeMegaStore"
                checked={AvailableStore.includes('Mega Store')}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="storeMegaStore">Mega Store</label>
            </div>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      {submitted && (
        <div className="mt-5">
          <h2>Submitted Data</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Cost</th>
                <th scope="col">Product Online</th>
                <th scope="col">Product Category</th>
                <th scope="col">Available Store</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.ProductID}</td>
                  <td>{item.ProductName}</td>
                  <td>{item.ProductCost}</td>
                  <td>{item.ProductOnline}</td>
                  <td>{item.ProductCategory}</td>
                  <td>{item.AvailableStore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
