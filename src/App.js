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
      IsShowModal: false,
    };

    this.handler = this.handler.bind(this);
  }

  handler = () => {
    var IsShowed = this.state.IsShowModal;
    this.setState({ IsShowModal: !IsShowed });
  };

  render() {
    return (
      <div className="staking-container">
        <Nav handler={this.handler} IsShowModal={this.state.IsShowModal}/>
        <Body handler={this.handler} IsShowModal={this.state.IsShowModal}/>
        <Modal handler={this.handler} IsShowModal={this.state.IsShowModal}/>
      </div>
    );
  }
}

export default App;
