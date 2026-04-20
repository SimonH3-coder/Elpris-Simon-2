import { useEffect } from "react"
export function Now() {

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

    function findTimeWindow(inputDateStart, inputDateEnd) {
        const timeStart = new  Date(inputDateStart) 
        const timeEnd = new Date(inputDateEnd)
        const localTime = new Date()

        console.log(localTime.getHours());
        
        if (localTime.getHours() >= timeStart.getHours()
        && localTime.getHours() <= timeEnd.getHours()) {
    console.log("Nu ER DEN INDEN FOR TIDEN");
        }
    

         
        console.log( "Start", timeStart);
        console.log("End", timeEnd);
        

    }

    console.log(day);
    

    const priceClass = 'DK1'


    useEffect(() => { 
        

        async function getData() {
            try {
                const res = await fetch(`https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_${priceClass}.json`)
                const data = await res.json()
                findTimeWindow(data[13].time_start, data[13].time_end)

                console.log(" Vores Data: ", data);
                

            } 
            catch (err) {
                console.error(err)
            }
        }
        getData()
    }, 
    []);
    return (
        <section>
        <h1>Elprisen lige nu</h1>
        <div>
            <h3>0.242kr pr. kWh</h3>
        </div>
        <h4>Mellem 22:00-23:00</h4>
        </section>
        

    )
}