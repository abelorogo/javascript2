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







let time=3000
function  sumAsync(num1,num2,callback){

result= num1+num2


callback(result)
}

function callMe(){

setTimeout(function() {


document.getElementById("d").innerHTML=result
document.body.style.backgroundColor = "pink";

}, time);


}

sumAsync(45,56,callMe)


function sumAsync1(num1, num2, callback) {
    const result = num1 + num2;
    const delay = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
        callback(result);
    }, delay);
}
sumAsync1(5, 10, (result) => {
    console.log('Result:', result);
});


{
    const posts = [
        {title: 'Post One', body: 'This is is post one'},
        {title: "Post Two", body: "This is post two"}
    ]


    button = document.getElementById("myButton")
    count = 2
    function getPosts(){
        setTimeout(()=>{
            let output = ''
            posts.forEach((post)=>{
                output += `<dl><dt><li>${post.title}</li><dt><\dl>`
                output +=`<dl><dd><li>${post.body}</dd></li><dl>`
            })
            document.getElementById("myUl").innerHTML = output
        }, 2000)
    }
    function createPost(post, callback){
        setTimeout(()=>{
            posts.push(post)
            callback()
        }, 500)
    }
    getPosts()
    button.addEventListener('click', ()=>{
        count++
        newPost = {title: `Post ${count}`, body: `This is post ${count}`}
        createPost(newPost, getPosts)
    })
}
