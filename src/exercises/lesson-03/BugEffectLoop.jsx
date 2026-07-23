//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(1);
    }, 0);
    return clearTimeout(timer);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
/*
Add an empty array to 'useEffect' to ensure this only runs once when the component firsts mounts.
Wrapped 'setCount' in a 'setTimeout' to resolve issue about setting state inside an effect. 
Returned a cleanup function to cancel the timeout if the component unmounts before it fires.
*/
