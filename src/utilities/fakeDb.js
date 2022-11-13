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

export {
    addToProfile
}