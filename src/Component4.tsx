import React, { useContext } from 'react';
import { CounterContext } from './Component1';

export function Component4() {
    const context = useContext(CounterContext);

    return (
        <div>
            <p>
                You clicked {context.count} times!
            </p>
        </div>);
}