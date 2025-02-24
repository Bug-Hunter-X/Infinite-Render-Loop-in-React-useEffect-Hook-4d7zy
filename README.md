# Infinite Render Loop in React useEffect

This repository demonstrates a common React bug: an infinite render loop caused by improperly using the `useEffect` hook.

## Bug Description
The `bug.js` file contains a React component that uses `useEffect` to update its state. However, the state update is done within the effect itself. This causes the effect to trigger again and again, leading to an infinite render loop.

## Solution
The `bugSolution.js` file shows the corrected implementation. The solution involves setting a dependency array for `useEffect` to prevent it from triggering unnecessarily.