import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import Filter from './Filter'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    allHogs: [],
    sortedHogs: [],
    filter: ''
  }


  compareAsc = (a, b) => {
    const keyA = a.name.toUpperCase();
    const keyB = b.name.toUpperCase();

    let comparison = 0;
    if (keyA > keyB) {
      comparison = 1;
    } else if (keyA < keyB) {
      comparison = -1;
    }
    return comparison;
  }

  compareDesc = (a, b) => {
    const keyA = a.name.toUpperCase();
    const keyB = b.name.toUpperCase();

    let comparison = 0;
    if (keyA < keyB) {
      comparison = 1;
    } else if (keyA > keyB) {
      comparison = -1;
    }
    return comparison;
  }

  compareWeightAsc = (a, b) => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const keyA = a[weight];
    const keyB = b[weight];

    let comparison = 0;
    if (keyA > keyB) {
      comparison = 1;
    } else if (keyA < keyB) {
      comparison = -1;
    }
    return comparison;
  }

  compareWeightDsc = (a, b) => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const keyA = a[weight];
    const keyB = b[weight];

    let comparison = 0;
    if (keyA < keyB) {
      comparison = 1;
    } else if (keyA > keyB) {
      comparison = -1;
    }
    return comparison;
  }

  handleChange = (string) => {
    this.setState({
      filter: string
    }, () => console.log("working", this.state.filter))
  }

  handleClick = () => {
    switch(this.state.filter) {
      case "name-asc":
        this.setState({
          sortedHogs: this.state.allHogs.sort(this.compareAsc)
        }, () => console.log(this.state.sortedHogs))
        break;
      case "name-dsc":
      this.setState({
        sortedHogs: this.state.allHogs.sort(this.compareDesc)
        }, () => console.log(this.state.sortedHogs))
        break;
      case "weight-asc":
      this.setState({
        sortedHogs: this.state.allHogs.sort(this.compareWeightAsc)
        }, () => console.log(this.state.sortedHogs))
        break;
      case "weight-dsc":
      this.setState({
        sortedHogs: this.state.allHogs.sort(this.compareWeightDsc)
        }, () => console.log(this.state.sortedHogs))
        break;
      case "true":
        this.setState({
          sortedHogs: this.state.allHogs.filter(hog => hog.greased === true)
        })
        break;
      case "false":
        this.setState({
          sortedHogs: this.state.allHogs.filter(hog => hog.greased === false)
        })
        break;
    }
  }

  componentDidMount() {
    this.setState ({
      allHogs: hogs,
      sortedHogs: hogs
    }, () => console.log(this.state))
  }


  render() {
    return (
      <div className="App">
          < Nav />
          < Filter handleChange={this.handleChange} handleClick={this.handleClick}/>
          <br/><br/>
          < HogContainer allHogs={this.state.sortedHogs} />
      </div>
    )
  }
}

export default App;
