const buttons = document.querySelectorAll('.num-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        document.getElementById('d').value += button.textContent;
    });
});
