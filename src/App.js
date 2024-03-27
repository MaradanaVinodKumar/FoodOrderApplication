import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Store/Actions';
import Compnent1 from './components/Compnent1';

const App = () => {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const res = await fetch("https://tthdnz-3000.csb.app/meals");
    dispatch({ data: await res.json(), type: "UPDATEDATA" });
  }
  const deleteRecordById = (id) => {
    dispatch({ id: id, type: "DELETERECORDBYID" })
  }
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={() => { dispatch(decrement()); console.log(count) }}>-</button>
        <span>{count.count}</span>
        <button onClick={() => { dispatch(increment()); console.log(count) }}>+</button>
        <button onClick={() => { fetchData() }}>fech and add data</button>
        <button onClick={() => { deleteRecordById("m1") }}>Delete record in the array</button>
      </div>

      <div style={{ display: 'flex', flexWrap: "wrap" }}>
        <div>
          <Compnent1 />
        </div>
        <div>
          <Compnent1 />
        </div>
      </div>
      <div>
        {
          count.data &&
          <table border={1} style={{ borderCollapse: "collapse", margin: "30px 50px", marginBottom: "1000px" }}>
            {(count.data).map((items, index) => {
              return (
                <tr key={index}>
                  <td style={{ padding: 3 }}>{items.id}</td>
                  <td style={{ padding: 3 }}>{items.name}</td>
                  <td style={{ padding: 3 }}>{items.price}</td>
                  <td style={{ padding: 3 }}>{items.image}</td>
                  <td style={{ padding: 3 }}>{items.description}</td>
                </tr>
              )
            })}
          </table>
        }
      </div>
    </div>
  );
};

export default App;