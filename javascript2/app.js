let ayName = +prompt("necenci aydi?");
let ay = "";

if (ayName === 1){
    ay = "yanvar";
}else if(ayName === 2){
    ay = "fevral"
}else if(ayName === 3){
    ay = "mart"
}else if(ayName === 4){
    ay = "aprel"
}else if(ayName === 5){
    ay = "may"
}else if(ayName === 6){
    ay = "iyun"
}else if(ayName === 7){
    ay = "iyul"
}else if(ayName === 8){
    ay = "avqust"
}else if(ayName === 9){
    ay = "sentyabr"
}else if(ayName === 10){
    ay = "oktyabr"
}else if(ayName === 11){
    ay = "noyabr"
}else if(ayName === 12){
    ay = "dekabr"
}else{
    console.log("bele bir ay yoxdu")
}


console.log(ay);
