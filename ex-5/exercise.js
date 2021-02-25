// Example
window.alert("Hello World!");
var phrase = prompt("write your favorite sentence")
alert(phrase+ " your sentence have " + phrase.length + " number of character " )

//extra.........
alert("please write two different sentance and computer will tell you which sentance have more character")
var phraseone = prompt("write your first phrase")
var phrasetwo = prompt("write your second phrase")

if(phraseone.length > phrasetwo){
    alert(phraseone + "phraseone has longest with" + phraseone.length +" number of charchers. ")

}
else if (phrasetwo.length > phraseone.length){
    alert(phrasetwo + " phrasetwo has logest with" + phrasetwo.length + " numberof charachters. ")
}
else{
    alert( " both phrase are have equal of character")
}