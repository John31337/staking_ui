import { Button } from '@material-ui/core';
import '../css/Body.css';
import '../css/Main.css';
import Small_background from '../static/media/small_background.jpg'
import Container from './Container';
import Footer from './Footer';

function Body() {
  return (
      <div className='body'>
        <div className="row">
          <h2 className="staking-title">Rewards</h2>
        </div>
        <div className="row">
          <p className="staking-text">The Merit Circle DAO offers two core pools. Variable locking for up to twelve months is available for MC and LP staking.</p> 
        </div>
        <img alt className='small-background' src={Small_background}/>
        <div className='main'>
          <>
            <div className='main-container'>
              <Container/>
            </div>
          </>
          <Footer/>
        </div>
      </div>
  );
}

export default Body;
