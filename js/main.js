let button = document.querySelector('.button')
const displayJoke = document.querySelector(".displayJoke")
let htmlFragment = ''

const createFragment = jokeData => {
  if (jokeData.type == 'single'){
  htmlFragment =`<p>${jokeData.joke}</p>`
  console.log(jokeData.type)
  console.log(htmlFragment)
  } else if 
    (jokeData.type == 'twopart'){
      htmlFragment = `<p>${jokeData.setup} ${jokeData.delivery}</p>`
      console.log(jokeData.type)
      console.log(htmlFragment)
    }
    
  displayJoke.innerHTML = htmlFragment

  }
const joke = async () => {
  try {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)
    const jokeData = await response.json()
    const jokes = jokeData
    // console.log(jokes)
    createFragment(jokes)
    return jokes
  } catch (e) {
    console.log('ERROR!', e)
  }
}

button.addEventListener('click', e => {
 joke()
  
})

