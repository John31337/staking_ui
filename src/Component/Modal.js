import '../css/Modal.css';
import Icon from "../static/media/stake.675d343f.svg";
import React from "react";
import Metamask from "../static/media/metamask.02e3ec27.png";
import Coinbase from "../static/media/coinbase.a3a7d7fd.svg";
import Walletconnect from "../static/media/walletConnect.304e3277.svg";
import Coin98 from "../static/media/coin98.d2743de3.png";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

    render() {
        return(
            <div role="presentation" className="MuiModal-root MuiDialog-root css-126xj0f">
                <div aria-hidden="true" className="MuiBackdrop-root css-919eu4"></div>
                <div tabIndex="0" data-test="sentinelStart"></div>
                <div className="MuiDialog-container MuiDialog-scrollPaper css-ekeie0 MuiDialog-style" role="presentation" tabIndex="-1">
                    <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation24 MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm css-uhb5lp" role="dialog" aria-describedby="alert-dialog-slide-description" aria-labelledby="mui-45758897">
                        <h3 className="connect-wallet-card-title">Select Wallet</h3><h3 className="connect-wallet-card-text">Connect to the site below with one of our available wallet providers.</h3>
                        <div className="MuiDialogContent-root css-1ty026z">
                            <button className="choose-wallet-button">
                                <span>Metamask</span>
                                <div class="wallet-icon-container">
                                    <img height={24} width={24} src={Metamask}/>
                                </div>
                            </button>
                            <button className="choose-wallet-button">
                                <span>Coinbase Wallet</span>
                                <div className="wallet-icon-container">
                                    <img src={Coinbase}/>
                                </div>
                            </button>
                            <button className="choose-wallet-button">
                                <span>WalletConnect</span>
                                <div className="wallet-icon-container">
                                    <img src={Walletconnect}/>
                                </div>
                            </button>
                            <button className="choose-wallet-button">
                                <span>Coin98</span>
                                <div className="wallet-icon-container">
                                    <img height={24} width={24} src={Coin98}/>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div tabIndex="0" data-test="sentinelEnd"></div>
            </div>
        );
    }
}

export default Modal;
