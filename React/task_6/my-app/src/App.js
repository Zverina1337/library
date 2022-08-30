import './App.css';
import {useState} from "react";

function App() {
  const [obj, setObj] = useState({
    year:  2025,
    month: 12,
    day:   31,
  });
  function handleChange(prop, value){
    setObj({...obj, ...{[prop] : value}});
  } 
  return (
    <div className="App">
      <input type="text" value={obj.day}onChange={event => handleChange("day", event.target.value)}/>
      <input type="text" value={obj.month}onChange={event => handleChange("month", event.target.value)}/>
      <input type="text" value={obj.year}onChange={event => handleChange("year", event.target.value)}/>
      <br />
      <p>{obj.day}/{obj.month}/{obj.year}</p>
    </div>
  );
}

export default App;
