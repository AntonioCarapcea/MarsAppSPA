import React, { useContext } from 'react';
import { CounterContext } from './Component1';

export function Component2() {
    const context = useContext(CounterContext);

    return (
        <div>
            <button onClick={context.increment}>
                Click me
            </button>
        </div>
    );
}