import './App.css';
import {useState} from 'react';

function App() {
  // 1, 2, 3, 4
  const [array, setArray] = useState([1,2,3,4,5]);
  let result = array.map((value, index)=>{
    return <li key={index}>{value}</li>
  });

  return (
    <div className="App">
      {/* 1, 2, 3, 4 */}
      <ul>
        {result}
      </ul>
      <button onClick={()=>{ setArray([...array, array[array.length - 1] += Number(1)]);}}>++</button>
      <button onClick={()=>{ setArray([...array.slice(0, array.length - 1), ...array.slice(array.length + 1)])}}>--</button>
      <button onClick={()=>{ setArray([...array.slice(0, array.length - 1), "!", ...array.slice(array.length + 1)])}}>Change</button>
      <button onClick={()=>{ setArray([...array.reverse()])}}>Reverse</button>
    </div>
  );
}

export default App;
