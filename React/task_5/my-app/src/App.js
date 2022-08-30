import {useState} from 'react';
import './App.css';

function App() {
  // 1, 2
  const [notes, setNotes] = useState([1,2,3,4,5,6,7,8,9]);
  const [editNum, setEditNum] = useState(null)
  function averageArr(arr){
    let sum = 0;
    arr.map((value)=>{
      return sum += Number(value);
    })
    return Math.round(sum / arr.length);
  }
  function changeHandler(index, value){
    setNotes([...notes.slice(0, index), value, ...notes.slice(index + 1)]);
  }
  // const result = notes.map((value, index) =>{
  //   return <input type='text' onChange={event => changeHandler(index, event.target.value)}/>
  // });
  const result = notes.map((value,index)=>{
    return <>
          <p key={index}>{value}</p>
          <button onClick={() => setEditNum(index)}>Edit</button>
        </>;
  });
  return (
    <div className="App">
    {/* 1 */}
      {/* {result}<br/>
      {averageArr(notes)} */}
    {/* 2 */}
      {result}<br/>
      <input type="text" value={notes[editNum]} onChange={event => changeHandler(editNum, event.target.value)} onBlur={event => event.target.value = ''}/>
    </div>
  );
}

export default App;
