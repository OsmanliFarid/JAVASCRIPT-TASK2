const name = prompt("adin nedir")
const ceki = +prompt("cekin ne qederdir")
const boy = +prompt("boyun ne qederdir")
const BMT = ceki / (boy * boy)
if (BMT < 18.5){
    console.log(`"${name} Aldigimiz netice 18.5-den kicikdir senin BMI-si azdir, ariqsan."`)

}else if(BMT < 25){
    console.log(`"${name} Aldigimiz netice 25-den kicikdir, senin BMI-si normal beden olcusune sahibdir."`)
}else if(BMT < 30){
    console.log(`"${name} senin netice 30-den kicikdir, senin BMI-si kokdur."`)
}else{
    console.log(`${name} sen "obesen"`)
}