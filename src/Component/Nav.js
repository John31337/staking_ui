import logo from '../static/media/stakingLogo.9c5d58cb.svg';
import logoMobile from '../static/media/stakingLogoMobile.28c0aeb3.svg';
import menuButton from '../static/media/menu.aca47f39.svg';
import '../App.css';

function Nav() {
  return (
      <div className="staking-nav-container">
        <a aria-current="page" className='active'  href='/'>
          <img className="desktopLogo" alt="" src={logo}/>
          <img class="mobileLogo" alt="" src={logoMobile}/>
        </a>
        <div class="staking-nav-contents-container">  
          <a aria-current="page" class="is-active">
            <div className='staking-nav-tab' variant="text" color="inherit">Overview</div>
          </a>
          <a aria-current="page">
            <div className="staking-nav-tab">Reward</div>
          </a>
          <a aria-current="page">
            <div className="staking-nav-tab">LeaderBoard</div>
          </a>
          <a aria-current="page">
            <div className="staking-nav-tab nav-disabled" disabled>NFT</div>
          </a>
          <a aria-current="page">
            <div className="staking-nav-wallet-button">Connect Wallet</div>
          </a>
          <div><button class="menu-button"><img alt="" src={menuButton}/></button></div>
        </div>
      </div>
  );
}

export default Nav;
