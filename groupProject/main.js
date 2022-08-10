let button = document.querySelector('.button')
const jokeDiv = document.querySelector('joke')
let jokes = ""


// li.append(".joke")
const joke = async () => {
  try{
  const response = await fetch(`https://backend-omega-seven.vercel.app/api/getjoke`)
  const data = await response.json()
  const jokes = data[0]
  // console.log(data[0])
  console.log(jokes)

  } 
  catch (e){
    console.log("ERROR!", e)
  }    
}  
  
button.addEventListener('click', (e) => {
  joke()
 

})


  
function displayJoke(data){
  const jokes = data.object[0]
  

}



const li = document.createElement('li')
// jokeDiv.appendChild(li)
