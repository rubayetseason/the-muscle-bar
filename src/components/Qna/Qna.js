import React from 'react';
import './Qna.css'
const Qna = () => {
    return (
        <div className='q-container'>
            <div className='q'>
                <div><h3>Q. How does React works?</h3></div>
                <div><h5> React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </h5></div>
            </div>
            <div  className='q'>
                <div><h3>Q. What is the difference between props vs stats?</h3></div>
                <div><h5>State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used and modified inside the component. Props, on the other hand,make components reusable by giving components the ability to receive data from the parent component in the form of props. </h5></div>
            </div>
            <div  className='q'>
                <div><h3>Q. What are the other uses of useEffect() other than data fetching?</h3></div>
                <div><h5>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. Its other uses are <br />
                Running on state change: validating input field. <br />
Running on state change: live filtering. <br />
Running on state change: trigger animation on new array value. <br />
Running on props change: update paragraph list on fetched API data update </h5></div>
            </div>
        </div>
    );
};

export default Qna;