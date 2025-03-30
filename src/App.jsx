import './App.css'
import getSheetData from './service/sheetService'
import { useEffect, useState } from 'react'


function App() {
  const [data, setData] = useState([]);
  
  const date = new Date()
  const today = date.getDay();

  const weekdays = {
    0: "G", //"Sunday",
    1: "A", //"Monday",
    2: "B", //"Tuesday",
    3: "C", //"Wednesday",
    4: "D", //"Thursday",
    5: "E", //"Friday",
    6: "F", //"Saturday",
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
      <h2>Today {date.toDateString()}</h2>
      <section className="Today" style={{width:"100%", color:"white", textAlign:"left"}}>
        <ul>
        {data && data.map((d, i) => d ? <li key={i}>{d}</li> : null)}
        </ul>
      </section>
    </>
  )
}

export default App
