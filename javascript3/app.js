const name = prompt("adin nedir")
const gender = prompt("cinsiyetin nedir (k/q)")

if (gender === "k" || gender === "K"){
    console.log(`Salam Cenab ${name}`);
    
}else if(gender === "q" || gender === "Q"){
    console.log(`Salam xanim ${name}`);
    
}else{
    console.log("lufen doğru secin");
    
}