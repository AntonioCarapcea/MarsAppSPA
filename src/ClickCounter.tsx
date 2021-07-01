import React, { useState, useEffect } from 'react';
import './App.css';

export function ClickCounter() {
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

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>
                Click me
            </button>
        </div>
    );
}
