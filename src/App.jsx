import './App.css'
import getSheetData from './service/sheetService'
import { useEffect, useState } from 'react'


function App() {
  const [data, setData] = useState([]);
  const today = new Date().getDay();
  const weekdays = {
    0: "B",
    1: "C",
    2: "D",
    3: "E",
    4: "F",
    5: "G",
    6: "F",
  };
  const query = `SELECT ${weekdays[today]}`;

  useEffect(() => {   
    getSheetData({
      sheetID: import.meta.env.VITE_SHEET_ID,
      sheetName: 'Sheet1',
      query: query,
      callback: (data) => {
        setData(data);
      },
    })
  }
  , [])

  return (
    <>
      <h1 className="read-the-docs">
        Gymmy some love
      </h1>
      <h2>Today</h2>
      <section className="Today" style={{width:"100%", color:"white", textAlign:"left"}}>
        <ul>
          {
            data && data.map((d, i)=>(
              <li key={i} >{d}</li>
            ))
          }
        </ul>
      </section>


    </>
  )
}

export default App
