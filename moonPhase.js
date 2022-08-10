// this is where we'll have the code for the moon phase api pull


let dateInput = document.querySelector('#dateInput')
let searchButton = document.querySelector('#search')
let state = document.getElementById('state');
let displayMoonPhase = document.querySelector(".displayMoonPhase")

searchButton.addEventListener('click', (e) => {
        let dateOutput = dateInput.value
        let stateOutput = state.value
        console.log(stateOutput)

    moonMain(dateOutput, stateOutput)
})

const createFragment = (data, moonText) =>{
    let htmlfragment = `<p>${moonText}</p>`
    displayMoonPhase.innerHTML = htmlfragment
}

let data;
const moonMain = async (dateOutput, stateOutput) => {
    try{
    let fetchData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${stateOutput}/${dateOutput}?unitGroup=us&key=PXLCYVMHK8W88EN9J7UFB2NFN&include=days&elements=moonphase,sunrise,sunset&contentType=json`)
    let result = await fetchData.json(); //saving the data in a variable named 'result' and at the same time converting it to an object or an array of objects
    data = result; // this is assigning value to the variable 'data' (created on line 10)
    // the difference between fetchData - this is data that's being returned as a string and 'data' is an object or an array of objects
    console.log(data);
    let moonText = moonPhaseConverter(data.days[0].moonphase)
    createFragment(data, moonText)
    }
   catch (error){
    console.log(error)
    }
}

const moonPhaseConverter = (moonDecimal) => {
        let decimal = parseFloat(moonDecimal)
        console.log(decimal)
        let moonPhaseWords=""
        if (decimal<0.25){
            console.log(`waxing crescent`);
            moonPhaseWords = `waxing crescent`;
        } else if(decimal==0.25){
            console.log(`first quarter`);
            moonPhaseWords = 'first quarter'
        } else if(decimal<0.5){
            console.log(`waxing gibbous`);
            moonPhaseWords = 'waxing gibbous'
        } else if(decimal==0.5){
            console.log(`full moon`);
            moonPhaseWords = 'full moon'
        } else if(decimal>0.5 && decimal<0.75){
            console.log(`waning gibbous`);
            moonPhaseWords = 'waning gibbous'
        } else if(decimal==0.75){
            console.log(`last quarter`);
            moonPhaseWords = 'last quarter'
        } else if(decimal>0.75 && decimal<=1){
            console.log(`waning crescent`)
            moonPhaseWords = 'waning crescent'
        } else if(decimal==0){
            console.log(`new moon`);
            moonPhaseWords = 'new moon'
        }
    return moonPhaseWords    
} 




