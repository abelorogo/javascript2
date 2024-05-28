{

    function fib(n){

        if (n==0){
            return []
            

        }
        else if (n==1){
            return [1]
        }
        else if (n==2){
            return [0,1]
        }
            
        else{

            fibonacciSequence =[0,1]

            for (i=2 ; i<n; i++){
                whatToBePushed= fibonacciSequence[i-1]  + fibonacciSequence[i-2]
                results =fibonacciSequence.push(whatToBePushed)
            }

        }
        return fibonacciSequence
    }
   
    
}
console.log(fib(20))








{

    pp=document.getElementById("p1")
    let def=true
    but=document.getElementById("button").onclick=

    function change(){
        if (def){
            pp.className="p2"
            def= false

        }
       else{
        pp.className="p1"
        def = true
       }
        
    }


   

}

