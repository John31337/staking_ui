import '../css/Body.css';
import Icon from "../static/media/stake.675d343f.svg";
import React from "react";

class Staking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

    handleClick(e) {
        e.preventDefault();
        console.log('Clicked');
    }

    render() {
        return(
            <div className="Staking">
                <div className="card">
                    <img alt="" class="icon" src={Icon}/>
                    <span class="card-title">Staked</span>
                    <span class="number">$0.00</span>
                    <div className='divider'></div>
                    <div className='not-connected' onClick={this.handleClick}>Connect Wallet</div>
                </div>
            </div>
        );
    }
}

export default Staking;
