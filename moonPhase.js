// this is where we'll have the code for the moon phase api pull


let dateInput = document.querySelector('#dateInput')
let searchButton = document.querySelector('#search')



//Shannon's code
let data;
const moonMain = async (date, state) => {
    try{
    let fetchData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${state}/1990-01-01?unitGroup=us&key=PXLCYVMHK8W88EN9J7UFB2NFN&include=days&elements=moonphase,sunrise,sunset&contentType=json`)
    let result = await fetchData.json();
    data = result;
}
   catch (error){
    console.log(error)
}
    
}
moonMain()
//end Shannon's code





// Veronica T's code
// let data;
//     const getData = async (date,state) => { //main function
//         try {
//             let fetchData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${state}/${date}?unitGroup=us&key=PXLCYVMHK8W88EN9J7UFB2NFN&include=days&elements=moonphase,sunrise,sunset&contentType=json`)
//             let result = await fetchData.json();
//             data = result

//         } catch (error) {
//             console.log(error)
//         }
// end Veronica T's code
    
    // switch(data){
    //     case 'waxingCrescent':
    //         (data.days[0].moonphase<=0.25);
    //         console.log(`waxing crescent`);
    //         break;
    //     case 'firstQuarter':
    //         (data.days[0].moonphase==0.25);
    //         console.log('first quarter');
    //         break;
    //     case 'waxingGibbous':
    //         (data.days[0].moonphase<=0.5);
    //         console.log('waxing gibbous');
    //         break;
    //     case 'fullMoon':
    //         (data.days[0].moonphase==0.5);
    //         console.log('full moon');
    //         break;
    //     case 'waningGibbous':
    //         (data.days[0].moonphase>=0.5 && data.days[0].moonphase<=0.75);
    //         console.log('waning gibbous');
    //         break;
    //     case 'lastQuarter':
    //         (data.days[0].moonphase==0.75);
    //         console.log('last quarter');
    //         break;
    //     case 'waningCrescent':
    //         (data.days[0].moonphase>0.75 && data.days[0].moonphase<=1)
    //     case 'newMoon':
    //         (data.days[0].moonphase==0);
    //         console.log('new moon');
    //         break;
    //     }
    //     console.log('data:',data)
    // }


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

var state = document.getElementById('state');

for(var i = 0; i < usStates.length; i++) {
    var option = document.createElement("option");
    option.text = usStates[i].name;
    option.value = usStates[i].abbreviation;
    state.add(option);
}

searchButton.addEventListener('click', (e) => {
    let date = dateInput.value
    let state = state.value
    getData(date,state)
})
