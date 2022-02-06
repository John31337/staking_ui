import './App.css';
import Body from './Component/Body';
import Nav from './Component/Nav';
import Modal from './Component/Modal';
import { connect } from "react-redux";
import React, {useEffect} from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

// function connectMetaMask() {
//   // We need to make the connection to MetaMask work.
//   // Send Request for accounts and to connect to metamask.
//   window.web3.requestAccounts()
//   .then((result) => {
//     // Whenever the user accepts this will trigger
//     console.log(result)
//   })
//   .catch((error) => {
//     // Handle errors, such as when a user does not accept
//     throw new Error(error);
//   });
// };

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      IsShowModal: false,
      IsConnectedWallet: false,
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
