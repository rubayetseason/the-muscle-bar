import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import Swal from 'sweetalert2'
const Dashboard = (props) => {
    const {info} = props;

const [breakTime, setBreakTime] = useState(0);
const addBreak = (value) => {
    setBreakTime(value);
    const storedData = localStorage.getItem('value');
    if(!storedData){
        localStorage.setItem('value', value);
    }
    else{
        localStorage.setItem('value', value);
}
}
useEffect(() => {
    const number = localStorage.getItem('value');
    setBreakTime(number);
},[]);
   

const complete = () => {
    Swal.fire(
        'Congrats from The Muscle Bar!',
        'You successfully done the activities!',
        'success'
      )
};


    return (
        <div>
            <h3 className='center'>Dashboard</h3>
            <div className='info-div'>
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='user-img' />
                <div className='flex'><h2 className='margin'>Rubayet Islam</h2>
                    <p className='margin'>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='data-container'>
                <div className='single-data'>
                    <div><h2 className='margin'>70 <small className='grey'>kg</small></h2></div>
                    <div>Weight</div>
                </div>
                <div className='single-data'>
                    <div><h2 className='margin'>5'8"</h2></div>
                    <div>Height</div>
                </div>
                <div className='single-data'>
                    <div><h2 className='margin'>22 <small className='grey'>years</small></h2></div>
                    <div>Age</div>
                </div>
                <div>

                </div>
            </div>
            <h3 className='margin2'>Add A Break</h3>
            <div className='btn-container'>
                <button onClick={() => addBreak(10)} className='break-btn'>10</button>
                <button onClick={() => addBreak(20)} className='break-btn'>20</button>
                <button onClick={() => addBreak(30)} className='break-btn'>30</button>
                <button onClick={() => addBreak(40)} className='break-btn'>40</button>
                <button onClick={() => addBreak(50)} className='break-btn'>50</button>
            </div>
            <h3 className='margin3'>Exercise Detail</h3>
            <div className='detail-container'>
                <div className='color'>
                    <h4 className='margin'>Exercise time &nbsp; &nbsp; {info} seconds</h4>
                </div>
                <div className='color'>
                    <h4 className='margin'>Break time &nbsp; &nbsp; {breakTime? breakTime : 0} seconds</h4>
                </div>
            </div>
            <div>
                <button onClick={complete} className='complete-btn'>Activity Complete</button>
            </div>
        </div>
    );
};

export default Dashboard;