import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

type TodoItemPageParams = {
    id: string;
} 

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null)
    const params = useParams<TodoItemPageParams>()
    const navigate = useNavigate()
    const denied = String(todo?.completed)


    useEffect(() => {
        fetchTodo()
    }, [])
  
    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id)
            setTodo(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div>
            <button onClick={() => navigate('/todos')}>Back</button>
            <h1>Задача {todo?.id}</h1>
            <div>
                Выполнение: {denied}
            </div>
            <div>
                {todo?.title} {todo?.title} {todo?.title}
            </div>
        </div>
    );
};

export default TodoItemPage;