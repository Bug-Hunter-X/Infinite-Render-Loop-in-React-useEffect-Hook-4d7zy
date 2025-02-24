```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update state only once on mount
    // The empty dependency array makes it run only once
    setCount(count + 1);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```