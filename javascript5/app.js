const house_kvad = +prompt("nece kvadratliq ev isteyirsiz?")
const house_money = +prompt("neceye alirsiz evi?")
const currency = prompt("odeme hansi valyuta edeceksiz")

if(house_kvad >= 2000 && house_money === 99999 && currency === "azn"){
    console.log("evi aliram")
    
}else{
    console.log("hec bir hal mene maraqli deyil.Evi almiram makler deyilem.Alverciler narahat etmesin");
    
}