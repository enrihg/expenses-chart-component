import './Spending.css';

function Spending() {
    return (
        <div className='Spending'>
            <h1>Spending - Last 7 days</h1>
            <div className='Graphic'>
                <div>
                    <div className='Char'></div>
                    <div>mon</div>
                </div>
                <div>
                    <div className='Char'></div>
                    <div>tue</div>
                </div>
                <dive>
                    <div className='Char'></div>
                    <div>wed</div>
                </dive>
                <div>
                    <div className='Char'></div>
                    <div>thu</div>
                </div>
                <div>
                    <div className='Char'></div>
                    <div>fri</div>
                </div>
                <div>
                    <div className='Char'></div>
                    <div>sat</div>
                </div>
                <div>
                    <div className='Char'></div>
                    <div>sun</div>
                </div>
            </div>
            <hr/>
            <div className='Flex'>
                <div>
                    <h3>Total this month</h3>
                    <div className='Total'>$478.33</div>
                </div>
                <div>
                    <div className='Variation'>+2.4%</div>
                    <h3>from last month</h3>
                </div>
            </div>
        </div>
    );
}

export default Spending;