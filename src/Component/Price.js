import '../css/Body.css';
import EthIcon from "../static/media/EthIcon.png";

function Price() {
  return (
    <div className="Price">
        <div className="mini-card">
            <div className='price-card'>
                <div className='price-container'>
                    <div className='price-container-top'>
                        <span className="price-title">MC Price</span>
                        <span className="price-number">$2.49</span>
                        <span className='price-title number-go-up'>
                            <img width={16} height={16} src={EthIcon}/>5.66%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Price;
