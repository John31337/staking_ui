import '../css/Body.css';
import Icon from "../static/media/stake.675d343f.svg";

function Staking() {
  return (
    <div className="Staking">
        <div className="card">
            <img alt="" class="icon" src={Icon}/>
            <span class="card-title">Staked</span>
            <span class="number">$0.00</span>
            <div className='divider'></div>
            <div className='not-connected' href="#pools">Connect Wallet</div>
        </div>
    </div>
    );
}

export default Staking;
