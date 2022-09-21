var imput = prompt("Hey, how are you today?")

if(imput.toUpperCase() === imput) {
    console.log("You are shouting? Relax");
} else if (imput.toLocaleUpperCase() === imput) {
    console.log("You are whispering. ");
} else {
    console.log("You are a happy person! (No shouting or whispering people.)");
}