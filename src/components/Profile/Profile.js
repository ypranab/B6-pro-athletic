import React, { useEffect, useState } from 'react';
import { addBreakTimeToStorage, getBreakTime } from '../../utilities/fakeDb';
import kevin from './kevin.png';
import './Profile.css'

const Profile = ({ activeList }) => {

    let activeTimer = 0;
    for (const activity of activeList) {
        activeTimer = activeTimer + (activity.activityTime * activity.quantity);
    }
    const [breakTime, setBreakTime] = useState([]);

    const addToBreak = time => {
        addBreakTimeToStorage(time);
        setBreakTime(time);
    }

    const [breakTimeFromLocal, setBreakTimeFromLocal] = useState([]);

    useEffect(() => {
        const breakTimeFromLocal = getBreakTime();
        setBreakTimeFromLocal(breakTimeFromLocal);
    }, [])

    let mystyle = {};

    if (breakTime >= 20) {
        mystyle = {
            display: 'none'
        }
    }
    else {
        mystyle = {
            display: 'inline-block'
        }
    }

    return (
        <div className='profile-summary'>
            <h2>Profile Summary</h2>
            <div className='profile-section'>
                <img className='profile-img' src={kevin} alt="" />
                <h3>Jahid Hasan</h3>
            </div>
            <div className='details-div'>
                <div>
                    <span className='details'><strong>75kg</strong></span>
                    <span className='details'><strong>6.5feet</strong></span>
                    <span className='details'><strong>25years</strong></span>
                </div>
                <span className='details'>Weight</span>
                <span className='details'>Height</span>
                <span className='details'>Age</span>
            </div>
            <h3>Add a Break</h3>
            <div className='btn-div'>
                <button className='btn-break' onClick={() => addToBreak(20)}>20s</button>
                <button className='btn-break' onClick={() => addToBreak(30)}>30s</button>
                <button className='btn-break' onClick={() => addToBreak(40)}>40s</button>
                <button className='btn-break' onClick={() => addToBreak(50)}>50s</button>
            </div>
            <h2>Exercise Details</h2>
            <p className='details-div'>Exercise Time: {activeTimer} Seconds</p>
            <p className='details-div'>Break Time: {breakTime}
                <span style={mystyle}>{breakTimeFromLocal['time']}</span> Seconds</p>
        </div>
    );
};

export default Profile;