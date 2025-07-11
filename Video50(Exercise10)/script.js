/* 
Create a business name generator by combining list of adjectives and shop name and another word


Adjective List : 
    Crazy;
    Amazing;
    Fire

Shop Name : 
    Engine;
    Foods;
    Garments;

Another word : 
    Bros;
    Limited;
    Hub
*/

let rand = Math.random();
let first,second,third;
if(rand < 0.33){
    first="Crazy";
}
else if(rand <= 0.66){
    first = "Amazing";
}else{
    first = "Fire";
}

let rand1 = Math.random();
if(rand1 < 0.33){
    second="Engine";
}
else if(rand <= 0.66){
    second = "Foods";
}else{
    second = "Garments";
}

let rand2 = Math.random();
if(rand2 < 0.33){
    third="Bros";
}
else if(rand <= 0.66){
    third = "Limited";
}else{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);