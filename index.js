let random= random_number();
let modify = document.getElementById('guessed');

function random_number(){
    let number = Math.floor((Math.random() * 100) + 1);
    return number;
}

function check(input_val){
    console.log(random);
    if (random < input_val){
        modify.innerHTML = 'Your Guess is too high'
    }
    else if(random > input_val){
        modify.innerHTML = ("Your Guess is too low")
    }
    else{
        modify.innerHTML = ("You Guessed it!")
    }
}

document.getElementById('submit').onclick = function() {
    let input_val = Number(document.getElementById('input_content').value);
    console.log(input_val);
    if (isNaN(input_val)) {
        alert('Please enter a number')
    }
    else{
        check(input_val);
    }
}