import React, { useEffect, useState } from 'react';
import './Body.css'
import logo from '../../logo.png'
import Exercise from '../Exercise/Exercise';
import Dashboard from '../Dashboard/Dashboard';
const Body = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    const addbtn = (exercise) => {
        console.log(exercise);
    }

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
                            addbtn={addbtn}
                        ></Exercise>)
                    }
                </div>
            </div>
            <div>
               <Dashboard></Dashboard>
            </div>
        </div>
    );
};

export default Body;