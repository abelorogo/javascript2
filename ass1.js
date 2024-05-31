async function collect(){
    let info = await fetch("https://jsonplaceholder.typicode.com/posts");
    let con = await info.json();
    console.log(con);

    let out = '';
    for(let i = 0; i < con.length; i++){
        out += `
        <div class="infomation">
            <label class="s">${con[i].title}</label><br>
            <p class="same">${con[i].body}</p>
        </div>`;
    }
    document.getElementById("infomation").innerHTML = out;
}

collect();
