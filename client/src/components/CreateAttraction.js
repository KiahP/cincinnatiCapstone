import React, { Component } from 'react';
import axios from 'axios';


export default class CreateAttraction extends Component {
  constructor(props) {
    super(props);


    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeZipcode = this.onChangeZipcode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
        name: '',
        description: '',
        image: '',
        address: '',
        city: '',
        state: '',
        zipcode: 0
    }
  }





  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }


  onChangeImage(e) {
    this.setState({
      image: e.target.value
    });
  }


  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }


  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }

  onChangeZipcode(e) {
    this.setState({
      zipcode: e.target.value
    });
  }


  onSubmit(e) {
    e.preventDefault();
  
    const newAttraction = {
        name: this.state.name,
        description: this.state.description,
        image: this.state.image,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode
    };
  
    console.log(newAttraction);

    axios.post('http://localhost:5000/attraction/add', newAttraction)                
    .then(res => console.log(res.data));
    
    window.location = '/attraction';
  }


  render() {
    return (
      <div>
        <h3>Add New Attraction</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group"> 
            <label>Image Url: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.image}
                onChange={this.onChangeImage}
                />
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.address}
                onChange={this.onChangeAddress}
                />
          </div>
          <div className="form-group">
            <label>City: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.city}
                onChange={this.onChangeCity}
                />
          </div>
          <div className="form-group">
            <label>State: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.state}
                onChange={this.onChangeState}
                />
          </div>
          <div className="form-group">
            <label>Zipcode: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.zipcode}
                onChange={this.onChangeZipcode}
                />
          </div>
          


          <div className="form-group">
            <input type="submit" value="Add Restaurant" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}