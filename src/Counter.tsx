import React from 'react';
import { useStore } from './store';

const Counter: React.FC = () => {
    const { state, dispatch } = useStore();

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default Counter;