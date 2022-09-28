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
            <div><h2>Dashboard</h2></div>
        </div>
    );
};

export default Body;