import React, { useState } from 'react';
import kevin from './kevin.png';
import './Profile.css'

const Profile = ({ activeList }) => {

    let activeTimer = 0;
    for (const activity of activeList) {
        activeTimer = activeTimer + (activity.activityTime * activity.quantity);
    }
    const [breakTime, setBreakTime] = useState([]);
    const addToBreak = time => {
        setBreakTime(time);
    }

    return (
        <div className='profile-summary'>
            <h2>This is Profile</h2>
            <div className='profile-section'>
                <img className='profile-img' src={kevin} alt="" />
                <h3>Jahid Hasan</h3>
            </div>
            <div>
                <span>75kg</span>
                <span>6.5feet</span>
                <span>25years</span>
            </div>
            <h3>add a break</h3>
            <div>
                <button className='btn-break' onClick={() => addToBreak(20)}>20s</button>
                <button className='btn-break' onClick={() => addToBreak(30)}>30s</button>
                <button className='btn-break' onClick={() => addToBreak(40)}>40s</button>
                <button className='btn-break' onClick={() => addToBreak(50)}>50s</button>
            </div>
            <p>Time:{activeTimer}</p>
            <p>Break Time:{breakTime}</p>
        </div>
    );
};

export default Profile;