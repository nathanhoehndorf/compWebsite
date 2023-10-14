function nathansTheme() {

    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
    //document.body.style.fontFamily = "Impact,Charcoal,sans-serif"

}

function chasesTheme() {

    document.body.style.backgroundColor = "blue";
    document.body.style.color = "lime";

}

function resetTheme() {

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

}

function numberGuesser() {

    let num =  parseInt(Math.random() * 10) + 1;
    let guess = prompt('Guess a Number between 1-10!');
    if (guess == num) {

        alert('Correct!');

    } else {

        alert('Incorrect!');

    }

}
