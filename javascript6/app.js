const direction = prompt("hansi terefe gedirsen")
mesaj = ""
if (direction === "up"){
    
    mesaj = "yuxari get"
}else if(direction === "right"){
    mesaj = "saga get"
}else if(direction === "down"){
    mesaj = "asagi get"
}else if(direction === "left"){
    mesaj = "sola get"
}else{
    console.log("lutfen istiqamet secin");
    
}
console.log(mesaj)