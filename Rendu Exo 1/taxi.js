let playlist = [
    "Anissa - Wejdene",
    "Moth to a flame - The Weekend",
    "Swim - Chase Atlantic",
    "World Away - Lil Peep",
    "Glimpse of us - Joji"]

class Character {
    constructor(name, mentalHealth) {
    this.name = name
    this.mentalHealth = mentalHealth
    }

trajet(playlist) { 
    let redLight = 0
    let taxi = 0

            while(redLight >= 0 && this.mentalHealth >= 0) {
            redLight++
            console.log("le feu rouge numéro " + redLight + " est passé")

            var randomItem = playlist[Math.floor(Math.random()*playlist.length)]
            console.log("La musique est " + randomItem)
            if(randomItem == "Anissa - Wejdene") {
            this.mentalHealth--
            taxi++            
            console.log("John a changé de taxi")
            console.log("John a " + this.mentalHealth + " de santé mentale")
            }

            if(this.mentalHealth == 0) {
            console.log("John a explosé")
            break
            }

            if(redLight == 30) {
            console.log("John est arrivé à son domicile")
            break
            }
        }
    }
}

let John = new Character("John", 10)
John.trajet(playlist)