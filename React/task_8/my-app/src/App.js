import './App.css';
import {useState} from 'react';
import {v4} from 'uuid';

function App() {

  const initProds = [
    {id: v4(), name: 'prod1', catg: 'catg1', cost: 100},
    {id: v4(), name: 'prod2', catg: 'catg2', cost: 200},
    {id: v4(), name: 'prod3', catg: 'catg3', cost: 300},
  ];
  const table = initProds.map(table => {
      return (
        <table>
          <tBody>
            <tr>
              <td>{table.name}</td>
              <td>{table.catg}</td>
              <td>{table.cost}</td>
            </tr>
          </tBody>
        </table>)
        
  });

  return (
    <div className="App">
      {table}
    </div>
  );
}

export default App;
