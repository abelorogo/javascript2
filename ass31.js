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
result2= num1*num2
result3= num1/num2
result4= num1%num2

callback(result,result2,result3,result4)
}

function callMe(){

setTimeout(function() {

    console.log(result,result2,result3,result4)
}, 3000);


}

sumAsync(45,56,callMe)

