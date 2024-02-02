import './Balance.css';
import logo from './assets/images/logo.svg';

function Balance() {
    return (
        <div className='Balance'>
            <div>
                <h2>My balance</h2>
                <span>$921.48</span>
            </div>
            <img src={logo} alt="logo"/>
        </div>
    );
}

export default Balance;