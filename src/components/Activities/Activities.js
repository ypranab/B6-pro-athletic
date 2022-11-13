import './Activities.css';

const Activities = (props) => {
    const { activity, addToList } = props;
    // console.log(activity);
    const { name, activityTime, picture, age } = activity;

    return (
        <div className='activity-container'>
            <div className='activities'>
                <img className='img-activity' src={picture} alt="" />
                <p>{name}</p>
                <p>{age}</p>
                <p>{activityTime}</p>
            </div>
            <button onClick={() => addToList(activity)} className='btn-list'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Activities;