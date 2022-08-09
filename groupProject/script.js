const joke = async () => {
  fetch(`https://backend-omega-seven.vercel.app/api/getjoke`)
  .then(res => {
    console.log("Resolved!", res)
    res.json().then(data => conl
  })
  .catch((e) => {
    console.log("Error!", e)
  }) 
}

joke()