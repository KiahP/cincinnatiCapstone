import React, { Component } from 'react';
import axios from 'axios';

const History = props => (
  <tr>
    <td>{props.history.name}</td>
    <td>{props.history.description}</td>
    <td><img src={props.history.image} alt=""/></td>
    <td>{props.history.address}</td>
    <td>{props.history.city}</td>
    <td>{props.history.state}</td>
    <td>{props.history.zipcode}</td>
  </tr>
)

export default class CincyHistory extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {histories: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/history/')
     .then(response => {
       this.setState({ histories: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  cincyHistory() {
    return this.state.histories.map(currenthistory => {
      return <History history={currenthistory} key={currenthistory._id}/>;
    })
  }
  render() {
    return (
        
      <div className="text-center">
        <h1>Discover Cincinnati's history!</h1>
        <span >Hear the story behind our most famous bridge, the first skyscraper, and Cincy's leading industries. From the Red Stockings to the newly formed FC Cincinnati, we have a rich sports tradition. Jazz, Blues, classical, and Rock all sound off in our musical heritage. Cheers to a long tradition of beer breweries. Find out why we have several nicknames, and learn the tale of several of Cincinnati's most well known people by visiting some of our historical attractions.</span>
        <table className="table">
    <thead className="thead-light">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Image</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zipcode</th>
      </tr>
    </thead>
    <tbody>
      { this.cincyHistory() }
    </tbody>
  </table>
</div>
      


    );
  }
}