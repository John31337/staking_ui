import './App.css';
import Body from './Component/Body';
import Nav from './Component/Nav';
import Modal from './Component/Modal';
import { connect } from "react-redux";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      IsShowModal: true,
    };
  }

  ShowModal(){
    if(this.state.IsShowModal)
      return <Modal/>
  }

  render() {
    return (
      <div className="staking-container">
        <Nav/>
        <Body/>
        {
          this.state.IsShowModal?<Modal/>:null
        }
      </div>
    );
  }
}

export default App;
