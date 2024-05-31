{console.log("hellow")

async function show(){
    
    let response= await fetch(" https://dog.ceo/api/breeds/image/random")
    let data=  await response.json()
    console.log(data)
    document.getElementById("g").src=data.message
  

}
let b=    document.getElementById("b")
   
b.addEventListener("click" ,show)}
{
    async function display(){

        let collect2= await fetch("https://official-joke-api.appspot.com/random_joke")
        let con= await collect2.json()
        console.log(con)
        document.getElementById("joke").innerHTML=con.setup
        document.getElementById("punchline").innerHTML=con.punchline
        document.getElementById("type").innerHTML=con.type
        document.getElementById("id").innerHTML=con.id
        
        

    }
    display()
    document.getElementById('n').addEventListener("click", display)
}

