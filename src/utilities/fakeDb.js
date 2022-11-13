const addToProfile = id => {
    let activityList = {};

    const storedList = localStorage.getItem('activity-list');
    if (storedList) {
        activityList = JSON.parse(storedList);
    }

    const quantity = activityList[id];
    if (quantity) {
        activityList[id] = quantity + 1;
    }
    else {
        activityList[id] = 1;
    }
    localStorage.setItem('activity-list', JSON.stringify(activityList));
}

const addBreakTimeToStorage = time => {
    //console.log(typeof (time));
    localStorage.removeItem('break-time');
    let breakList = {};
    const key = 'time';

    const storedTime = localStorage.getItem('break-time');
    if (storedTime) {
        breakList = JSON.parse(storedTime);
    }
    breakList[key] = parseInt(time);
    localStorage.setItem('break-time', JSON.stringify(breakList))
}

const getBreakTime = () => {
    let breakTimer = {};
    const breakTime = localStorage.getItem('break-time');
    if (breakTime) {
        breakTimer = JSON.parse(breakTime);
    }
    return breakTimer;
}

const getStoredData = () => {
    let activityDetails = {};
    const data = localStorage.getItem('activity-list');
    if (data) {
        activityDetails = JSON.parse(data);
    }
    return activityDetails;
}

export {
    addToProfile,
    getStoredData,
    addBreakTimeToStorage,
    getBreakTime
}