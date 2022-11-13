import './Activities.css';

const Activities = (props) => {
    const { activity, addToList } = props;
    // console.log(activity);
    const { name, gender, activityTime, company } = activity;

    return (
        <div className='activity-container'>
            <div className='activities'>
                <p>{name}</p>
                <p>{gender}</p>
                <p>{company}</p>
                <p>{activityTime}</p>
            </div>
            <button onClick={() => addToList(activity)} className='btn-list'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Activities;