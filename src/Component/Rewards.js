import '../css/Body.css';
import Reward from "../static/media/rewards.6e73b96c.svg";
import McIcon from "../static/media/mcicon.ed082177.svg";

function Rewards() {
  return (
    <div className="Rewards">
        <div className="card">
            <img alt="" class="icon" src={Reward}/>
            <span class="card-title">Unclaimed<br/>Rewards</span>
            <span class="number">$0.00</span>
            <span class='small-number'>
                <img width={16} height={16} src={McIcon}/>MC 0.00
            </span>
            <div className='divider'></div>
            <div className='not-connected' href="#pools">Connect Wallet</div>
        </div>
    </div>
  );
}

export default Rewards;
