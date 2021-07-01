import React, { useState, useEffect } from 'react';
import { Component2 } from './Component2';
import { Component3 } from './Component3';

interface CounterContextInterface {
    count: number;
    increment: () => void;
}

export const CounterContext = React.createContext<CounterContextInterface>({ count: 0, increment: () => { } });

export function Component1() {
    const [count, setCount] = useState(0);


    function increment() {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem("count", newCount.toString());
    }

    useEffect(() => {
        const initialCount = localStorage.getItem("count");
        if (initialCount) {
            setCount(parseInt(initialCount));
        }
    }, []);

    return (<div className="Component1">
        <CounterContext.Provider value={{ count, increment }}>
            <Component2 />
            <Component3 />
        </CounterContext.Provider>
    </div>
    );
}