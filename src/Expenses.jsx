import Balance from './Balance';
import Spending from './Spending';
import './Expenses.css'

function Expenses() {
    return (
        <div className='Expenses'>
            <Balance/>
            <Spending/>
        </div>
    );
}

export default Expenses;