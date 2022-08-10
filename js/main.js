let button = document.querySelector('.button')
const displayJoke = document.querySelector(".displayJoke")
let htmlFragment = ''

const createFragment = data => {
  if (data.type == 'single'){
  htmlFragment =`<p>${data.joke}</p>`
  console.log(data.type)
  console.log(htmlFragment)
  } else if 
    (data.type == 'twopart'){
      htmlFragment = `<p>${data.setup} ${data.delivery}</p>`
      console.log(data.type)
      console.log(htmlFragment)
    }
    
  displayJoke.innerHTML = htmlFragment

  }
const joke = async () => {
  try {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)
    const data = await response.json()
    const jokes = data
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

