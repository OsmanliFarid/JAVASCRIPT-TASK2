let hefte = +prompt("heftenin necenci gunudu?")
let gun = ""
if(hefte === 1) {
    gun = "Bazar ertesi"
}else if(hefte === 2) {
    gun = "Cersenbe axsami"
}else if(hefte === 3) {
    gun = "Cersenbe"
}else if(hefte === 4) {
    gun = "Cume axsami"
}else if(hefte === 5) {
    gun = "Cume"
}else if(hefte === 6) {
    gun = "senbe"
}else if(hefte === 7) {
    gun = "bazar"
}else(
    console.log("bele bir gun yoxdu")
)
console.log(gun);

