import './App.css';
import getSheetData from './service/sheetService';
import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("home");
  const [tab, setTab] = useState("table");
 
  
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

  const handlePayment = (page) => {
    setPage(page)
  }
  const handleTabs = (tab) => {
    setTab(tab)
  }
  return (
    <> 
      {page=="home" &&
        <img src={`https://lh3.googleusercontent.com/d/${import.meta.env.VITE_IMG_ID}`} width={200}/>
      }
      {console.log(`https://lh3.googleusercontent.com/d/${import.meta.env.VITE_IMG_ID}`)}
      {page!=="concept" &&       
        <h1 className="read-the-docs">
        Gymmy some love
        </h1>
        }
      {page=="home" &&<h2>Today {date.toDateString()}</h2>}
      {page=="home" && <button onClick={()=>handlePayment("concept")}>Main program concept</button>}
      {page=="home" && 
      <section className="Today" style={{width:"100%", color:"white", textAlign:"left"}}>
        <ul>
        {data && 
          data.map((d, i) => 
            i === 0 ? null : d ? <li key={i}> {d} </li> : null)
        }
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
        {page === "concept" && 
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px", flexWrap:"wrap", justifyContent:"center"}}>
          <h2>Main program concept</h2>

          {tab === "table" &&
          
          <div>
              <table border="1" cellpadding="8" cellspacing="0">
                <thead>
                  <tr>
                    <th>Weight (% of 1RM) <button onClick={()=>handleTabs("1rm")}>?</button> </th>
                    <th>Repetitions</th>
                    <th>Sets</th>
                    <th>Goal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>60–80%</td>
                    <td>6–12</td>
                    <td>3–4</td>
                    <td>Mass Gain</td>
                  </tr>
                  <tr>
                    <td>50–70%</td>
                    <td>12–20+</td>
                    <td>2–4</td>
                    <td>Weight Loss / Endurance</td>
                  </tr>
                </tbody>
              </table>

            <button onClick={()=>handlePayment("home")}>Back to home</button>
          </div>
          
          }

        {tab === "1rm" &&
          
          <div>
            <button onClick={()=>handleTabs("table")}>Table</button>

            <p>Weight (% of 1RM) means the load used in a set as a percentage of your One-Rep Max (1RM) — the maximum weight you can lift once for a given exercise.</p>

            <p>Example:</p>
            <p>If your 1RM for bench press is 100 kg:</p>

              <ul>
                <li>85% of 1RM = 85 kg</li>
                <li>70% of 1RM = 70 kg</li>
              </ul>
            <p>If you reach the max repetitions in all sets you need to recalculate your 1MR or increase the sets</p>
            <button onClick={()=>handlePayment("home")}>Back to home</button>
          </div>
          
          }
        </div>
        }
    </>
  )
}

export default App
