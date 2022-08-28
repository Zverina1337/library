import './App.css';
import React, { useState } from 'react';

function App() {
  // 1
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  // 2, 3 
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  // 4
  const [number, setNumber] = useState(0);
  // everywhere
  const options = {year: 'numeric', day: 'numeric', month: '2-digit', };
  const [result, setResult] = useState(0);
  return (
    <div className="App">
    {/* 1 */}
      <input type="text" onChange={(event)=> setValue1(event.target.value)}/><br/>
      <input type="text" onChange={(event)=> setValue2(event.target.value)}/><br/>
      <buttton onClick={()=> setResult(Number(value1) + Number(value2))}>Сумма</buttton><br/>
      <buttton onClick={()=> setResult(Number(value1) * Number(value2))}>Произведение</buttton><br/>
      <p>result : {result}</p>
    {/* 2,3 */}
      <input type="text" defaultValue={new Date().toLocaleDateString(undefined, options)} onChange={(event)=> setValue3(event.target.value)}/><br/>
      <input type="text" defaultValue={new Date().toLocaleDateString(undefined, options)} onChange={(event)=> setValue4(event.target.value)}/><br/><br/>
      <button onClick={() => setResult(Math.ceil((Math.abs(new Date(value4).getTime() - new Date(value3).getTime())) / (1000 * 3600 * 24)))}>Найти кол-во дней</button>
      <p>result : {result}</p>
    {/* 4 */}
      <input type="text" onChange={(event) => setNumber(event.target.value)} onBlur={() => {let sum = 0; (Array.from(number.toString(), Number)).map((num)=>{sum+=num;}); setNumber(sum)}}/>
      <p>{number}</p>
    </div>
  );
}

export default App;
