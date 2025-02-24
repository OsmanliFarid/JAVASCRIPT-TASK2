let hefte = +prompt("heftenin necenci gunudu?")
let gun = ""
if(hefte === 1) {
    gun = "Bazar ertesi"
}else if(hefte === 2) {
    gun = "Çerşenbe axşami"
}else if(hefte === 3) {
    gun = "Çersenbe"
}else if(hefte === 4) {
    gun = "Cüme axşami"
}else if(hefte === 5) {
    gun = "Cüme"
}else if(hefte === 6) {
    gun = "Şenbe"
}else if(hefte === 7) {
    gun = "Bazar"
}else(
    console.log("bele bir gun yoxdu")
)
console.log(gun);

