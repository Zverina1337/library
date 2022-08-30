import './App.css';
import {useState} from "react";
import {v4} from 'uuid';

function App() {
  const initNotes = [
    {
      id: 'GYi9G_uC4gBF1e2SixDvu',
      prop1: 'value11',
      prop2: 'value12',
      prop3: 'value13',
    },
    {
      id: 'IWSpfBPSV3SXgRF87uO74',
      prop1: 'value21',
      prop2: 'value22',
      prop3: 'value23',
    },
    {
      id: 'JAmjRlfQT8rLTm5tG2m1L',
      prop1: 'value31',
      prop2: 'value32',
      prop3: 'value33',
    },
  ];
  const [notes, setNotes] = useState(initNotes);
	const id = 'JAmjRlfQT8rLTm5tG2m1L';
  const prop = 'prop2';
  const prop2 = 'prop3';

  const newElem = {
    id: v4(),
    prop1: 'value41',
    prop2: 'value42',
    prop3: 'value43',
  }

	const result = notes.map(note => {
		return <p key={note.id}>
			<span>{note.prop1}</span>,
			<span>{note.prop2}</span>,
			<span>{note.prop3}</span>
		</p>;
	});
  const answer = notes.reduce((res, note) =>{
    if(note.id === id){
      return note[prop];
    }else{
      return res;
    }
  });
  return (
    <div className="App">
      {result}
      <button onClick={() => setNotes(notes.filter(note => note.id !== id))}>Delete</button>
      <button onClick={() => {setNotes([...notes, newElem]); console.log(newElem.id)}}>Add</button>
      <button onClick={() => {setNotes(notes.map(note => note.id === id ? newElem : note))}}>Change</button>
      <button onClick={() => {setNotes(notes.map(note => note.id === id ? {...note, ...{[prop] : note[prop] += "!"}, ...{ [prop2] : note[prop2] += '!'}} : note))}}>Change Elem</button>
      {/* 6 */}
      {/* <button onClick={() => {
        setNotes(notes.map(note => {
          if(note.id === id){
            let copy = Object.assign(note);
            copy[prop] += "!";
            copy[prop2] += "!";
            return copy;
          }else{
            return note;
          };
        }))
        }}>Change Elem</button> */}
      {answer}
    </div>
  );
}

export default App;
