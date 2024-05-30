/*


function f1(cal){

    console.log('this is function 1')
    
}



function f2(){

    console.log('this is function 2')
}



function f3(){

    console.log('this is function 3')
}


function total(k,l,h){
    console.log("welcome")
 k(f1)
 l(f2)
 h(f3)
}

total(f1,f2,f3 )*/








function  sumAsync(num1,num2,callback){

result= num1+num2


callback(result)
}

function callMe(){

setTimeout(function() {

    console.log(result)
}, 3000);


}

sumAsync(45,56,callMe)

