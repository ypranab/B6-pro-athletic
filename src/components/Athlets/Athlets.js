import React, { useEffect, useState } from 'react';
import { addToProfile } from '../../utilities/fakeDb';
import Activities from '../Activities/Activities';
import Profile from '../Profile/Profile';
import './Athlets.css';

const Athlets = () => {
    const [activities, setactivities] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setactivities(data));
    }, [])

    const [activeList, setActiveList] = useState([]);

    const addToList = (selectedActivity) => {
        const exist = activeList.find(activity => activity.id === selectedActivity.id);
        let newActiveList = [];
        if (!exist) {
            selectedActivity.quantity = 1;
            newActiveList = [...activeList, selectedActivity];
        }
        else {
            const rest = activeList.filter(activity => activity.id !== selectedActivity.id);
            exist.quantity = exist.quantity + 1;
            newActiveList = [...rest, exist];
        }
        setActiveList(newActiveList);
        addToProfile(selectedActivity.id);
    }

    return (
        <div className='athlets-container'>
            <div className='activities-container'>
                {
                    activities.map(activity =>
                        <Activities
                            key={activities.id}
                            activity={activity}
                            addToList={addToList}>
                        </Activities>)
                }
            </div >

            <div className='profile-container'>
                <Profile activeList={activeList}></Profile>
            </div>
        </div>

    );
};

export default Athlets;