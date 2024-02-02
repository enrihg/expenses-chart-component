import './Balance.css';

function Balance() {
    return (
        <div className='Balance'>
            <div>
                <h2>My balance</h2>
                <span>$921.48</span>
            </div>
            <img src='/expenses-chart-component/logo.svg' alt="logo"/>
        </div>
    );
}

export default Balance;