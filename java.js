/*
{

    let age= prompt("enter your age")

    if((age>=60) && (age <=120)){
        console.log(" you should be retired ")
    }

    else if((age>=24) && (age <=60)){
        console.log(" you  should be employed ")
    }

    else if((age>=15) && (age <=18)){
        console.log(" you should be in high school")
    }
    else if((age>=10) && (age <=14)){
        console.log(" you should be in upper primary  ")
    }

    else if((age>=6) && (age <=10)){
        console.log(" you should be in lower primary ")
    }
    else if((age>=3) && (age <=6)){
        console.log(" you should be in kindergarten ")
    }
    else{
        console.log("invalid input")
    }
}


*/


{

}function checker(p){

    for (let h=0; h<=p.length; h++){
     while ((h%h==0) && (h%h==1)){
            return true
        }
        return false   
    }
}

console.log(checker(20))