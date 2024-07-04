import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductID: '',
      ProductName: '',
      ProductCost: '',
      ProductOnline: '',
      ProductCategory: '',
      AvailableStore: [],
      data: [],
      submited:false
    };
 
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
 
  handleCheckboxChange(event) {
    const { name, checked } = event.target;
    this.setState((prevState) => {
      const AvailableStore = checked
        ? [...prevState.AvailableStore, name]
        : prevState.AvailableStore.filter(store => store !== name);
      return { AvailableStore };
    });
  }
 
  handleSubmit(event) {
    event.preventDefault();
    const { ProductID, ProductName, ProductCost, ProductOnline, ProductCategory, AvailableStore, submited } = this.state;
    const newData = {
      ProductID,
      ProductName,
      ProductCost,
      ProductOnline,
      ProductCategory,
      AvailableStore: AvailableStore.join(', '),
    };
    this.setState((prevState) => ({
      data: [...prevState.data, newData],
      ProductID: '',
      ProductName: '',
      ProductCost: '',
      ProductOnline: '',
      ProductCategory: '',
      AvailableStore: [],
      submited:true
    }));
  }
 
  render() {
    const {submited}=this.state;
    return (
      <div className="container mt-5">
        <h2 className="mb-4">Product List</h2>
        <form className="col g-3" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="ProductID" className="col-sm-2 col-form-label">Product ID</label>
            <div className='col-sm-5'>
            <input
              type="text"
              className="form-control"
              id="ProductID"
              name="ProductID"
              value={this.state.ProductID}
              onChange={this.handleChange}
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
              value={this.state.ProductName}
              onChange={this.handleChange}
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
              value={this.state.ProductCost}
              onChange={this.handleChange}
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
                  checked={this.state.ProductOnline === 'Yes'}
                  onChange={this.handleChange}
                  placeholder='Enter Product Online'
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
                  checked={this.state.ProductOnline === 'No'}
                  onChange={this.handleChange}
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
                value={this.state.ProductCategory}
                onChange={this.handleChange}
                class='custom-select my-1 mr-sm-2'
                required
              >
                <option value="">Choose...</option>
                <option value="Mobile">Mobile</option>
                <option value="Clothes">Clothes</option>
                <option value="Electronics">Electronics</option>
              </select>
            </div>
          </div>
          <div>
              <div class="form-group row">
              <div class="col-sm-2">Available Store</div>
              <div class="col-sm-10">
                <div class="form-check">
                      <input
                      className="form-check-input"
                      type="checkbox"
                      name="Big Bazar"
                      id="storeBigBazar"
                      checked={this.state.AvailableStore.includes('Big Bazar')}
                      onChange={this.handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="storeBigBazar">Big Bazar</label>
                </div>
                <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="D Mart"
                        id="storeDMart"
                        checked={this.state.AvailableStore.includes('D Mart')}
                        onChange={this.handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="storeDMart">D Mart</label>
                </div>
                <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="Reliance"
                        id="storeReliance"
                        checked={this.state.AvailableStore.includes('Reliance')}
                        onChange={this.handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="storeReliance">Reliance</label>
                </div>

                <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="Mega Store"
                        id="storeMegaStore"
                        checked={this.state.AvailableStore.includes('Mega Store')}
                        onChange={this.handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="storeMegaStore">Mega Store</label>
                </div>
              </div>
              </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        {submited &&(
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
                {this.state.data.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
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
  }
}
 
export default App;
