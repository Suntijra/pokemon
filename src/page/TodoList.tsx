import React from 'react';
import { useQuery } from 'react-query';

const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const TodoList: React.FC = () => {
    const { isLoading, error, data }: { isLoading: boolean, error: any, data: any } = useQuery('todos', fetchTodos);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {data.map((todo: any) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
