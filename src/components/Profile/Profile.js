import React from 'react';

const Profile = ({ activyList }) => {
    let activeTimer = 0;
    for (const activity of activyList) {
        activeTimer = activeTimer + (activity.activityTime * activity.quantity);
    }
    return (
        <div className='profile-summary'>
            <h2>This is Profile</h2>
            <p>Time:{activeTimer}</p>
        </div>
    );
};

export default Profile;