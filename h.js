{
    let def =true
    let pp=document.getElementById("r")
let b=document.getElementById("b")
b.addEventListener("click", function(){

    if (def){
        pp.className="r"
        def= false

    }
   else{
    pp.className="p2"
    def = true
   }
})

}