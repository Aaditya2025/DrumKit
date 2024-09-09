var numberofDrums = document.querySelectorAll(".drum").length; 

for(var i = 0; i < numberofDrums; i++){

//Detecting Sound: 
document.querySelectorAll(".drum")[i].addEventListener("click", function()
{
    var buttonInnerHTML = this.innerHTML;   //It will select the ith index i.e., "w".
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML); 
});
}

// Detecting Key: 
document.addEventListener("keypress", function(event)
{
    makesound(event.key); 
    buttonAnimation(buttonInnerHTML);  
    
}); 

function makesound(key){
    switch(key){
        case 'w': 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break; 

        case 'a':
            var tom2 = new Audio("sounds/prabh.mp3");
            tom2.play();
            break;

        case 's':
            var tom3 = new Audio("sounds/Shubh.mp3");
            tom3.play();
            break;

        case 'd':
            var tom4 = new Audio("sounds/tom-1.mp3");
            tom4.play();
            break;

        case 'j':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case 'k':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case 'l':
            var snare = new Audio("sounds/laado.mp3");
            snare.play();
            break;

        default : console.log(key); 
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey); 

    activeButton.classList.add("pressed"); 

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

