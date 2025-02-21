const party_name = prompt("Partiye xos gelmisen lutfen isim")
const party_age = +prompt("nece yasin var")
const party_gender = prompt("lutfen cinsinizi secin(k/q)")

if(party_age >= 18 && party_gender === "k" || party_gender === "K") {
    console.log(`Salam Cenab ${party_name } + senin yasin ${party_age} oldugundan partiye qatila bilersen`)
}else if(party_age >= 18 && party_gender === "q" || party_gender === "Q"){
    console.log(`Salam Cenab ${party_name }  senin yasin ${party_age} oldugundan partiye qatila bilersen`)
}else(
    console.log(`Partiye qatila bilmezsen yasin 18 kicikdi ${party_name}`)
)