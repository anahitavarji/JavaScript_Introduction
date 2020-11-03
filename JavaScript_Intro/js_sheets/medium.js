// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.


let voice = prompt ("Enter message as you please!")

if (voice === voice.toLowerCase()) { 
    console.log("whispering");

}
else if (voice === voice.toUpperCase()) {
    console.log("shouting")
}

else {
    console.log("neither");
}









