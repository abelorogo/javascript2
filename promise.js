function fact1(){
return new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("welcome to our first page")


    },3000)
})

}

function fact2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("welcome to our second page")
        }, 4500);
        
    })
}

function fact3 (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("welcome to our third page")
        }, 6000);
        
    })
}

fact1().then(function(value){

    console.log(value);
    return fact2()
})
.then(function(value2){
    console.log(value2)
    return fact3()
}) 
.then(function(params) {
    console.log(params)
}) 