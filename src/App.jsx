import './App.css'
import getSheetData from './service/sheetService'
import { useEffect } from 'react'


function App() {

  useEffect(() => {   
    getSheetData({
      sheetID: import.meta.env.VITE_SHEET_ID,
      sheetName: 'Sheet2',
      query: 'select *',
      callback: (data) => {
        console.log(data)
      },
    })
  }
  , [])

  return (
    <>
      <div>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
