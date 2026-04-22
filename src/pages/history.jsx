import { useState, useEffect } from "react"
import { findTimeWindow} from "../utils/findTimeWindow"
import { formatTime } from "../utils/formatTime"
import gear from '../assets/gear-solid.svg'
import calendar from '../assets/Calendar.svg'
import style from './history.module.scss'

export function History() {
    const [History, setHistory] = useState(undefined)

    // Der skal hentes data ud fra history
    // Vis dato og årstal for historik
    // Vis pris for hver time i historik
    
    // Lav et JS data objekt
    const date = new Date()
    const year = date.getFullYear()
    // Træk år ud fra dataobjektet 0-11
    let month = date.getMonth() +1 
    if (month < 10) {
        month = '0' + month
    }

    // 1-31
    // Hvis dag er mindre end to cifre, så plus 0 på day.
    let day = date.getDate()
    if (day < 10) {
        day = '0' + day
    }

    // Vi skal lave en funktion der kan finde et object som ligger
    // indenfor for det tidpunkt vi har lige nu.
    // Eks. så finder den objektet mellem 12-03

   

    console.log(day, month, year);

    const priceClass = 'DK1'

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_${priceClass}.json`)
                if(!res.ok)
                    throw new Error('Failed to Fetch')
                const data = await res.json()
                setHistory(data)
            
            console.log("Vores Data: ", data);
           
            }
            catch (err) {
                console.error(err)
            }
        }
        getData()
    }, [])
    

    return (
        <section className={style.historyContainer}>
        <img src={gear} alt="Settings" />
        
        <h1>History page</h1>
        <div>
            <label htmlFor={date}>
            
            <input type={'date'} name={'date'}/>
            <img src={calendar} alt="Calendar" />


            </label>
           
            <h3>ELPRISERNE D. 14-10-2023 </h3>
        </div>
       
        {History?.map((item) => {
            return (
                <div key={item.time_start}>
                    <h4>kl.{formatTime(item.time_start)} {item.DKK_per_kWh} kr</h4>
                </div>
            )
        }) }
       
        </section>
    )
}