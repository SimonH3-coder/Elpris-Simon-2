import { useEffect, useState } from "react"
import { findTimeWindow} from "../utils/findTimeWindow"
import { formatTime } from "../utils/formatTime"
import gear from '../assets/gear-solid.svg'
import style from './overview.module.scss'


export function Overview() {

const [overviewData, setOverviewData] = useState(undefined)

// Vi skal hente data
// Vise data for den pågældende time
// Vise time

const date = new Date()
    const year = date.getFullYear()
    // Træk år ud fra dataobjektet 0-11
    let month = date.getMonth() + 1
     if (month < 10) {
        month = '0' + month
    }

    // 1-31
    //Hvis dag er mindre end to cifre, så plus 0 på day.
    let day = date.getDate()
    if (day < 10) {
         day = '0' + day
    }

   


    // Vi skal lave en funktion der kan finde et object som ligger
    // indenfor for det tidpunkt vi har lige nu.
    // Eks. er  den 20.32 så finder den objektet mellem 20-21

  
    console.log(day);
    

    const priceClass = 'DK1'

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_${priceClass}.json`)
                if(!res.ok)
                throw new Error('Failed to Fetch')

                const data = await res.json()
               
                setOverviewData(data)
                console.log("Vores Data:", data);
                
                
                


            }
            catch (err) {
                console.error(err)
            }
        }
        getData()
    }, [])






    return (
        <section className={style.overviewContainer}>
        <img src={gear} alt="Settings" />
        <h1>OVERSIGT</h1>
        <div className={style.circleblack}>
        <div className= {style.circlegreen}>
           
            <h4>0.142 KR</h4>
            <h5>Pr. kWh</h5>
        </div>
        </div>

    
        
        <div className={style.circleblack2}>
        <div className={style.circlegreen2}>
           
            <h4>0.172 KR</h4>
            <h5>Pr. kWh</h5>
        </div>
        </div>
        <h3>Laveste Pris</h3> 
        <h3>Højeste Pris</h3>
        {overviewData?.map((item) => {
            return (
                <div key={item.time_start}>
                    <p>kl.{formatTime(item.time_start)} {item.DKK_per_kWh} kr</p>
                </div>
            )
        }) }
        </section>
        
    )
}