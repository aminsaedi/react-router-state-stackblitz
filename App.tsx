import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQueryState } from 'react-router-state';

export default function App() {
  return (
    <div>
      <p>
        Please click on the <code>Open In New Tab</code> to see the url changes
      </p>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

function Home() {
  const [value, setValue] = useQueryState('john', 'name');

  return (
    <div>
      <h1>Name query param: {value}</h1>
      <button onClick={() => setValue('amin')}>update to amin</button>
      <button onClick={() => setValue('john')}>update to john</button>
    </div>
  );
}
