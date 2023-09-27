var a = "Jean"
var b = "Paul"
var result = checkNames(a,b)

function checkNames(a,b) {
    if(a == b) {
    return true
    }
    else {
    return false
    }
}
console.log(result)

/*Correction*/

let a = "Jean"
let b = "Paul"
let result

function checkNames(firstName, secondName) {
    if (firstName === secondName) {
        return true
    } else {
        return false
    }
}
result = checkNames(a, b)

console.log(result)