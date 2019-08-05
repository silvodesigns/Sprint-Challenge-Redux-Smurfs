import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
//  */
// const SmurfsList = props => {
//   const fetchSmurfs = e => {
//     e.preventDefault();
//     props.getSmurfs();
//   };



class App extends Component {


  componentDidMount() {
    this.props.getSmurfs();
    console.log(this.props, "from inside app componentdidmount");

  }

  
  render() {
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state,"map to state");
  return{
    name: state.smurfs.name,
    age: state.smurfs.age,
    height: state.smurfs.height,
    id: state.smurfs.id
  }
}

export default connect(mapStateToProps,{getSmurfs} )(App);
