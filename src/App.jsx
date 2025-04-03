import './App.css'
import getSheetData from './service/sheetService'
import { useEffect, useState } from 'react'


function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("home");
  
  const date = new Date()
  const today = date.getDay();

  const weekdays = {
    0: "A", //"Sunday",
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

  const handlePayment = (page) => {
    setPage(page)
  }
  return (
    <> 
      {page=="home" &&
        <img src={`https://lh3.googleusercontent.com/d/${import.meta.env.VITE_IMG_ID}`} width={200}/>
      }
      
      <h1 className="read-the-docs">
        Gymmy some love
      </h1>
      {page=="home" &&<h2>Today {date.toDateString()}</h2>}
      {page=="home" && 
      <section className="Today" style={{width:"100%", color:"white", textAlign:"left"}}>
        <ul>
        {data && data.map((d, i) => d ? <li key={i}>{d}</li> : null)}
        </ul>
        <button onClick={()=>handlePayment("payment")}>Pay</button>
      </section>}
       {page === "payment" && <>
        <div style={{display:"flex", alignItems:"center", gap:"10px", flexWrap:"wrap", justifyContent:"center"}}>
          <script async
            src="https://js.stripe.com/v3/buy-button.js">
          </script>

          <stripe-buy-button
            buy-button-id="buy_btn_1R8efI06KjsG2dSwFnR3GxQk"
            publishable-key="pk_test_51R8alB06KjsG2dSwoaCw1Ihg1YHQDYLKaJdaNiISrp34OOvjYRZm4dJuAf93WmPgPOYn7J9zBYt7LSh2fHgkmaMn00TBHKi7NR"
            >
          </stripe-buy-button>
          

          <script async
              src="https://js.stripe.com/v3/buy-button.js">
            </script>

            <stripe-buy-button
              buy-button-id="buy_btn_1R8ejr06KjsG2dSwGxSeZbuh"
              publishable-key="pk_test_51R8alB06KjsG2dSwoaCw1Ihg1YHQDYLKaJdaNiISrp34OOvjYRZm4dJuAf93WmPgPOYn7J9zBYt7LSh2fHgkmaMn00TBHKi7NR"
              >
            </stripe-buy-button>

            <script async
              src="https://js.stripe.com/v3/buy-button.js">
            </script>

            <stripe-buy-button
              buy-button-id="buy_btn_1R8eog06KjsG2dSwSgmx2h6f"
              publishable-key="pk_test_51R8alB06KjsG2dSwoaCw1Ihg1YHQDYLKaJdaNiISrp34OOvjYRZm4dJuAf93WmPgPOYn7J9zBYt7LSh2fHgkmaMn00TBHKi7NR"
            >
            </stripe-buy-button>
        </div> 
        <button onClick={()=>handlePayment("home")}>Cancel</button>
        </>
        }
    </>
  )
}

export default App
