{

    let b= document.getElementsByTagName("body")[0];
   document.querySelector(".btn").addEventListener("click" , function(){

      
      b.style.backgroundColor="red";
    })

  document.querySelector(".btn1").addEventListener('click' , ()=>{

    b.style.backgroundColor="orange"
  })

  document.querySelector(".btn2").addEventListener("click" ,function(){

    b.style.backgroundColor.reverse   ()
  })
}

{


    const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
const but = document.querySelector('.b');
const r = document.getElementById('p');

outer.addEventListener("click", () => {
    r.innerHTML = "outer is clicked";
});

inner.addEventListener("click", () => {
    r.innerHTML = "inner is clicked";
});

but.addEventListener("click", () => {
    r.innerHTML = "button is clicked";
});
}

