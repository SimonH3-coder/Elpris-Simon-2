import { useEffect, useState } from "react"
import { findTimeWindow} from "../utils/findTimeWindow"
import { formatTime } from "../utils/formatTime"
import gear from '../assets/gear-solid.svg'
import style from './now.module.scss'


export function Now() {

    const [nowTime, setNowTime] = useState(undefined)

    // Vi skal hente data
    // Vise data for den pågældende time
    // Vise tidspunkt lige nu

    // Opret et JS data objekt
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
                const nowData = data.filter((item ) => findTimeWindow(item.time_start, item.time_end))
                if (nowData) {
                    setNowTime(nowData[0])
                }
                

                console.log(" Vores Data: ", data);
                console.log(("Single Data", nowData));
                
                

            } 
            catch (err) {
                console.error(err)
            }
        }
        getData()
    }, 
    []);
    return (
        <section className={style.nowContainer}>
        <img src={gear} alt="Settings" />
        <h1>ELPRISEN LIGE NU</h1>
        <main>
                <div className={style.circleone}>
                    <div className={style.circletwo}>
                        <div className={style.circlethree}>
                            <p>{nowTime?.DKK_per_kWh}kr pr. kWh</p>
                        </div>
                    </div>
                </div>
        </main>
        <h4>{formatTime(nowTime?.time_start)}-{formatTime(nowTime?.time_end)}</h4>
        </section>
        

    )
}
