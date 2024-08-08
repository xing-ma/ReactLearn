import { useState, useReducer } from 'react';
import { Button, Input } from 'antd';

export const Reducer = () => {
    const initialTasks = [{ id: 1, text: '周一跑步', isDel: false }];

    const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: tasks.length + 1,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId,
        });
    }

    return (
        <>
            <h2>运动列表</h2>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
        </>
    )
}

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('');
    return (
        <>
            <Input style={{ width: "15%" }}
                placeholder="添加任务"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            &nbsp;&nbsp;
            <Button
                onClick={() => {
                    setText('');
                    onAddTask(text);
                }}>
                添加
            </Button>
        </>
    );
}

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
    return (
        <ul>
            {tasks.filter(x => !x.isDel).map((task) => (
                <li key={task.id}>
                    <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
    );
}

const Task = ({ task, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <Input style={{ width: "15%" }}
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                &nbsp;&nbsp;
                <Button onClick={() => setIsEditing(false)}>Save</Button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text} &nbsp;&nbsp;
                <Button onClick={() => setIsEditing(true)}>编辑</Button>
            </>
        );
    }
    return (
        <>
            {taskContent} &nbsp;&nbsp;
            <Button onClick={() => onDelete(task.id)}>删除</Button>
        </>
    );
}

const TaskReducer = (tasks, action) => {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    isDel: false,
                }
            ];
        }
        case 'changed': {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.map((t) => {
                if (t.id === action.id) {
                    t.isDel = true;
                }
                return t;
            });
        }
        default: {
            throw Error('未知 action：' + action.type);
        }
    }
}