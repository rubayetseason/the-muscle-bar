import React from 'react';
import './Exercise.css'


const Exercise = (props) => {
    const {exercise} = props;
    const {name, img, descp, time} = exercise;
    return (
        <div className='item' data-aos="fade-up">
            <img src={img} className="item-img" />
            <h2 className='center'>{name}</h2>
            <p>{descp.slice(0, 80)}...</p>
            <h5 className='center'>Time Required: {time} seconds</h5>
            <button className='center btn'>Add to list</button>
        </div>
    );
};

export default Exercise;