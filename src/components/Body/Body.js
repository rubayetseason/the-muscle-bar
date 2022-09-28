import React, { useEffect, useState } from 'react';
import './Body.css'
import logo from '../../logo.png'
import Exercise from '../Exercise/Exercise';
const Body = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (
        <div className='body-container'>
            <div>
                <div className='logo-container'>
                    <img src={logo} className='logopic' />
                    <h2 className='logo'>The Muscle Bar</h2>
                </div>
                <div className='exercise-container'>
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                        ></Exercise>)
                    }
                </div>
            </div>
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
                    <button className='break-btn'>10</button>
                    <button className='break-btn'>20</button>
                    <button className='break-btn'>30</button>
                    <button className='break-btn'>40</button>
                    <button className='break-btn'>50</button>
                </div>
                <h3 className='margin3'>Exercise Detail</h3>
                <div className='detail-container'>
<div className='color'>
    <h4 className='margin'>Exercise time &nbsp; &nbsp; &nbsp; &nbsp; seconds</h4>
</div>
<div className='color'>
    <h4 className='margin'>Break time &nbsp; &nbsp; &nbsp; &nbsp; seconds</h4>
</div>
                </div>
                <div>
                    <button className='complete-btn'>Activity Complete</button>
                </div>
            </div>
        </div>
    );
};

export default Body;