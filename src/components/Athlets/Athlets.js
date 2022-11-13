import React, { useEffect, useState } from 'react';
import { addToProfile, getStoredData } from '../../utilities/fakeDb';
import Activities from '../Activities/Activities';
import Profile from '../Profile/Profile';
import './Athlets.css';

const Athlets = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, [])

    useEffect(() => {
        const storedData = getStoredData();
        //console.log(storedData);
        const savedData = [];
        for (const id in storedData) {
            const storedActivity = activities.find(active => active.id === id);

            if (storedActivity) {
                const quantity = storedData[id];
                storedActivity.quantity = quantity;
                savedData.push(storedActivity);
            }
            setActiveList(savedData);
        }
    }, [activities])

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