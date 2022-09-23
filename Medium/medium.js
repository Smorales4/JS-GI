var input = prompt("Hey, how are you today?")

if (input.toUpperCase() === input) {
    console.log("You are shouting? Relax");
} else if (input.toLowerCase() === input) {
    console.log("You are whispering. ");
} else {
    console.log("You are a happy person! (No shouting or whispering people.)");
}