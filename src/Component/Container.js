import '../css/Body.css';
import Staking from "./Staking";
import NotConnected from './NotConnected';
import Staked from './Staked';
import Price from './Price';
import Rewards from './Rewards';

function Container() {
  return (
    <div className='container'>
        <Staking/>
        <Rewards/>
        <Price/>
        <Staked/>
        <NotConnected/>
    </div>
  );
}

export default Container;
