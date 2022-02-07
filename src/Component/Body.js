import { Button } from '@material-ui/core';
import '../css/Body.css';
import '../css/Main.css';
import Container from './Container';

function Body() {
  return (
      <div className='body'>
        <div className="row">
            <div className='column'>
                <h2 className="staking-title">Rewards</h2>
            </div>
            <div className='column'>
                <p className="staking-text">The Merit Circle DAO offers two core pools. Variable locking for up to twelve months is available for MC and LP staking.</p>
            </div>
        </div> 
        <Container/>
      </div>
  );
}

export default Body;
