import './App.css';
import {useState} from 'react';

function App() {
  // 1, 2, 3
  const [notes, setNotes] = useState(['a','b','c','d','e']);
  const [value, setValue] = useState('');
  const result = notes.map((value, index) =>{
    return <li key={index} onClick={() => setNotes([...notes.slice(0, index), ...notes.slice(index + 1)])}>{value}</li>;
  });
  return (
    <div className="App">
    {/* 1, 2, 3 */}
      <ul>
        {result}
      </ul>
      <input type="text" onChange={(event) => setValue(event.target.value)} onBlur={(event) => {setNotes([...notes, value]); event.target.value = ''}}/><br/>
    </div>
  );
}

export default App;
