
    let count = 0;

    document.getElementById('increment').addEventListener('click', function() {
        count++;
        document.getElementById('count').innerHTML = count;
    });

    document.getElementById('decrement').addEventListener('click', function() {
        count--;
        document.getElementById('count').innerHTML = count;
    });
    document.getElementById('reset').addEventListener('click', function() {
        count=0;
        document.getElementById('count').innerHTML = count;
    });
