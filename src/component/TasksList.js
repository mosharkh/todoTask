import Task from "./Task";

const TasksList = (props) => {
    return (
        <div className="tasks-list">
            {props.tasks.map((ele) =>
                <Task name={ele.task} id={ele.id} handleDelete={props.handleDelete} key={ele.id}/>
            )}
        </div>
    );
};

export default TasksList;