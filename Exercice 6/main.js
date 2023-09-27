let names = []

names.push ("Vincent", "Paul", "Arthur")

for(let i=0; i < names.length; i++) {
    names[i] +="va à la pêche."
    console.log(names)
}

/*Méthode for each*/

names.forEach(name => {
    name +="va à la pêche"
    console.log(name)
} )