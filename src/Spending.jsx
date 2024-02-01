import './Spending.css';

//JSON data
const [ monday, tuesday, wednesday, thursday, friday, saturday, sunday ] = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

const weekTotal = monday.amount + tuesday.amount + wednesday.amount + thursday.amount +
                  friday.amount + saturday.amount + sunday.amount;

//Show the heights as percentages
const heights = {
    monday : (monday.amount)/weekTotal*500,
    tuesday : (tuesday.amount)/weekTotal*500,
    wednesday : (wednesday.amount)/weekTotal*500,
    thursday : (thursday.amount)/weekTotal*500,
    friday : (friday.amount)/weekTotal*500,
    saturday : (saturday.amount)/weekTotal*500,
    sunday : (sunday.amount)/weekTotal*500
}

function Spending() {
    return (
        <div className='Spending'>
            <h1>Spending - Last 7 days</h1>
            <div className='Graphic'>
                <div>
                    <div className='Char' style={{height: heights.monday}}></div>
                    <div>{monday.day}</div>
                </div>
                <div>
                    <div className='Char' style= {{height: heights.tuesday}}></div>
                    <div>{tuesday.day}</div>
                </div>
                <div>
                    <div className='Char' style= {{height: heights.wednesday}}></div>
                    <div>{wednesday.day}</div>
                </div>
                <div>
                    <div className='Char' style= {{height: heights.thursday}}></div>
                    <div>{thursday.day}</div>
                </div>
                <div>
                    <div className='Char' style= {{height: heights.friday}}></div>
                    <div>{friday.day}</div>
                </div>
                <div>
                    <div className='Char' style= {{height: heights.saturday}}></div>
                    <div>{saturday.day}</div>
                </div>
                <div>
                    <div className='Char' style= {{height: heights.sunday}}></div>
                    <div>{sunday.day}</div>
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