/*class -> structure de donnée
shéma d'objects -> plusieures instances
peut avoir des variables et des fonctions propres 
*/

class pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

/*
    isLucky() {
        if (Math.random() >= this.luck) {
            return true
        } else {
            return false
        }
    }
J'ai essayé de mettre la luck mais ça me faisait que des boucles infinies.
*/

    battlePokemonNoctali(Noctali) {
       Pikachu.hp -= Noctali.attack
/*J'ai essayé d'implémenter la défense en faisant 
Pikachu.hp -= (Noctali.attack - Noctali.defense)
Mais ça me faisait aussi des boucles infinies.*/
    }
    battlePokemonPikachu(Pikachu) {
        Noctali.hp -= Pikachu.attack
    }

    defensePokemon(pokemon) {
        pokemon.attack - pokemon.defense 
    }
}

let Noctali = new pokemon("Noctali", 15, 110, 150, 0.5)
let Pikachu = new pokemon("Pikachu", 15, 40, 160, 0.4)

while(Noctali.hp >= 0 && Pikachu.hp >= 0) {
    Noctali.battlePokemonNoctali(Pikachu)
    console.log("Noctali attaque Pikachu")
    console.log("Pikachu est à " + Pikachu.hp + " hp")
    Pikachu.battlePokemonPikachu(Noctali)
    console.log("Pikachu attaque Noctali")
    console.log("Noctali est à " + Noctali.hp + " hp")
    if(Noctali.hp === 0) {
        console.log("Noctali est mort")
        break
    }
    if(Pikachu.hp === 0) {
        console.log("Pikachu est mort")
        break
    }
}




