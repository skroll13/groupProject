// js code for fetching the astro data from the api
console.log(`test`)
const astroMain = async (data) =>{

    try{
        let fetchAstroData = await fetch(`https://ohmanda.com/api/horoscope/${data}`)
        let result = await fetchAstroData.json();
        let astroData = result
        console.log(astroData)
    }
    catch(error){
        console.log(error)
    }
}


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
signPicker('2022-08-22')





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