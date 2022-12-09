import React, {FC} from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
    onClick: (user: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({todo, onClick}) => {
    return (
        <div onClick={() => onClick(todo)}>
            <input type="checkbox" checked = {todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;