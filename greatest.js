let marr = [ 8,  9, 5, 7, 8, 45, 48, 144, 47, 84, 488, 800, 122, 900];

function check(arr) {
    
    let min = arr[0];
    let max = arr[0];
    
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    
    return max - min;
}

console.log(check(marr));  
