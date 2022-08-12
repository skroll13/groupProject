
<<<<<<< HEAD
=======

// this is where we'll have the code for the moon phase api pull

>>>>>>> d3e244c (new changes to website)
let dateInput = document.querySelector('#dateInput')
let searchButton = document.querySelector('#search')
let state = document.getElementById('state');
let displayMoonPhase = document.querySelector(".displayMoonPhase")
const displayJoke = document.querySelector(".displayJoke")
let htmlFragment = ''
<<<<<<< HEAD
let displayHoroscope = document.querySelector('.displayHoroscope')
=======
>>>>>>> d3e244c (new changes to website)

const createFragment1 = jokeData => {
    if (jokeData.type == 'single'){
    htmlFragment =`<p>${jokeData.joke}</p>`
    console.log(jokeData.type)
    console.log(htmlFragment)
    }else if 
      (jokeData.type == 'twopart'){
        htmlFragment = `<p>${jokeData.setup} ${jokeData.delivery}</p>`
        console.log(jokeData.type)
        console.log(htmlFragment)
      }
    displayJoke.innerHTML = htmlFragment
}

searchButton.addEventListener('click', (e) => {
        let dateOutput = dateInput.value
        let stateOutput = state.value
        console.log(stateOutput)
    moonMain(dateOutput, stateOutput)
    joke()
<<<<<<< HEAD
    signPicker(dateOutput)
=======
>>>>>>> d3e244c (new changes to website)
})

const createFragment = (data, moonText) =>{
    let htmlfragment = `<p>${moonText}</p>`
    displayMoonPhase.innerHTML = htmlfragment
}

const createHoroscope = (obj) => {
    let htmlfragment = `<p>${obj.horoscope}</p>`
    displayHoroscope.innerHTML = htmlfragment
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

var usStates = [
    
    { name: 'ALABAMA', abbreviation: 'AL'},
    { name: 'ALASKA', abbreviation: 'AK'},
    { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
    { name: 'ARIZONA', abbreviation: 'AZ'},
    { name: 'ARKANSAS', abbreviation: 'AR'},
    { name: 'CALIFORNIA', abbreviation: 'CA'},
    { name: 'COLORADO', abbreviation: 'CO'},
    { name: 'CONNECTICUT', abbreviation: 'CT'},
    { name: 'DELAWARE', abbreviation: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
    { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
    { name: 'FLORIDA', abbreviation: 'FL'},
    { name: 'GEORGIA', abbreviation: 'GA'},
    { name: 'GUAM', abbreviation: 'GU'},
    { name: 'HAWAII', abbreviation: 'HI'},
    { name: 'IDAHO', abbreviation: 'ID'},
    { name: 'ILLINOIS', abbreviation: 'IL'},
    { name: 'INDIANA', abbreviation: 'IN'},
    { name: 'IOWA', abbreviation: 'IA'},
    { name: 'KANSAS', abbreviation: 'KS'},
    { name: 'KENTUCKY', abbreviation: 'KY'},
    { name: 'LOUISIANA', abbreviation: 'LA'},
    { name: 'MAINE', abbreviation: 'ME'},
    { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
    { name: 'MARYLAND', abbreviation: 'MD'},
    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
    { name: 'MICHIGAN', abbreviation: 'MI'},
    { name: 'MINNESOTA', abbreviation: 'MN'},
    { name: 'MISSISSIPPI', abbreviation: 'MS'},
    { name: 'MISSOURI', abbreviation: 'MO'},
    { name: 'MONTANA', abbreviation: 'MT'},
    { name: 'NEBRASKA', abbreviation: 'NE'},
    { name: 'NEVADA', abbreviation: 'NV'},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    { name: 'NEW JERSEY', abbreviation: 'NJ'},
    { name: 'NEW MEXICO', abbreviation: 'NM'},
    { name: 'NEW YORK', abbreviation: 'NY'},
    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
    { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
    { name: 'OHIO', abbreviation: 'OH'},
    { name: 'OKLAHOMA', abbreviation: 'OK'},
    { name: 'OREGON', abbreviation: 'OR'},
    { name: 'PALAU', abbreviation: 'PW'},
    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
    { name: 'PUERTO RICO', abbreviation: 'PR'},
    { name: 'RHODE ISLAND', abbreviation: 'RI'},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    { name: 'TENNESSEE', abbreviation: 'TN'},
    { name: 'TEXAS', abbreviation: 'TX'},
    { name: 'UTAH', abbreviation: 'UT'},
    { name: 'VERMONT', abbreviation: 'VT'},
    { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
    { name: 'VIRGINIA', abbreviation: 'VA'},
    { name: 'WASHINGTON', abbreviation: 'WA'},
    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
    { name: 'WISCONSIN', abbreviation: 'WI'},
    { name: 'WYOMING', abbreviation: 'WY' }
];

for(var i = 0; i < usStates.length; i++) {
    var option = document.createElement("option");
    option.text = usStates[i].name;
    option.value = usStates[i].name.split(" ").join("%20");
    state.add(option);
}

const joke = async () => {
  try {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)
    const jokeData = await response.json()
    const jokes = jokeData
    // console.log(jokes)
    createFragment1(jokes)
    return jokes
  } catch (e) {
    console.log('ERROR!', e)
  }
<<<<<<< HEAD
}

console.log(`test`)
const astroMain = async (data) =>{
    try{
        let fetchAstroData = await fetch(`https://ohmanda.com/api/horoscope/${data}`)
        let result = await fetchAstroData.json();
        let astroData = result
        console.log(astroData)
        createHoroscope(astroData)
    }
    catch(error){
        console.log(error)
    }
}

<<<<<<< HEAD
=======

>>>>>>> d09cfb0 (merge to the main)

const signPicker = (dateOutput) => {
    let dateSlice = dateOutput.slice(5).split('-').join('')
    let astroSign=""
    if(dateSlice>=120 && dateSlice<=218){
        astroSign = 'aquarius';
    }else if(dateSlice>=219 && dateSlice<=320){
        astroSign = 'pisces';
    }else if(dateSlice>=321 && dateSlice<=419){
        astroSign = 'aries';
    }else if(dateSlice>=420 && dateSlice<=520){
        astroSign = 'taurus';
    }else if(dateSlice>=521 && dateSlice<=620){
        astroSign = 'gemini';
    }else if(dateSlice>=621 && dateSlice<=722){
        astroSign = 'cancer';
    }else if(dateSlice>=723 && dateSlice<=822){
        astroSign = 'leo';
    }else if(dateSlice>=823 && dateSlice<=922){
        astroSign = 'virgo';
    }else if(dateSlice>=923 && dateSlice<=1022){
        astroSign = 'libra';
    }else if(dateSlice>=1023 && dateSlice<=1121){
        astroSign = 'scorpio';
    }else if(dateSlice>=1122 && dateSlice<=1221){
        astroSign = 'sagittarius';
    }else{
        astroSign = 'capricorn';
    }astroMain(astroSign)
    return astroSign
}




// Capricorn Dates: December 22 – January 19 1222 - 119 Capricorn
// Aquarius Dates: January 20 – February 18 120 -218 Aquarius
// Pisces Dates: February 19 – March 20 219 - 320  Pisces
// Aries Dates: March 21 – April 19  --> 321 - 419 aries
// Taurus Dates: April 20 – May 20 --> 420 - 520 taurus
// Gemini Dates: May 21 – June 20 --> 521 - 620 gemini
// Cancer Dates: June 21 – July 22 --> 621 - 722 Cancer
// Leo Dates: July 23 – August 22 --> 723 - 822 Leo
// Virgo Dates: August 23 – September 22 823 - 922 Virgo
// Libra Dates: September 23 – October 22 923 - 1022 Libra
// Scorpio Dates: October 23 – November 21 1023 - 1121 Scorpio
// Sagittarius Dates: November 22 – December 21 1122 - 1221 Sagittarius
=======
}
>>>>>>> d3e244c (new changes to website)
