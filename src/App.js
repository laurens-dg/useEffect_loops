import { useEffect, useState, useRef } from 'react';
function App() {
  const [value, setValue] = useState('');

  // This count will be doubled in development since react runs each render cycle twice to avoid impure renders
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

// putting the default value to -1 because it renders once when opening the page, so first render is from -1 to 0 on opening page
  const [count, setCount] = useState(-1);
  useEffect(() => setCount(count + 1), [value]);

// de-comment this below and you have a loop, because the useEffect changes when the count is changing, mistake: we are after the input value changes and not the counter changes
  // useEffect(() => setCount(count + 1), [count]);

// de-comment this below and you have a loop, because the useEffect changes non stop because the 2nd attribute in useEffect is missing, as it renders on opening, it loses controll onload, mistake: don't look for ANY change
  // useEffect(() => setCount(count + 1));

  const onChange = ({ target }) => setValue(target.value);
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Value changes: {count}</div>
      <div>Renders: {renderCount.current}</div>

    </div>
  );
}
// useEffect changes when the 2nd attribute of your useEffect [value] changes.
// if you put [count] as the 2nd attribute yo



export default App;
