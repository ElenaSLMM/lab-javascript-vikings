// Soldier
class Soldier {

    constructor(health, strength){
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }

}


// Viking
class Viking extends Soldier{

    constructor(name, health, strength){
        super (health, strength)
        this.name = name
    }

    battleCry(){
        return 'Odin Owns You All!'
    }

    receiveDamage(damage){
        this.health -= damage

        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }

    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health -= damage

        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }

    }
    
}





//  War
class War {

    constructor(){
        this.vikingArmy= []
        this.saxonArmy = []
    }

    addViking(viking){

        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }


// SUPERBONUS

    attack(attackers, receivers){
        const randomAttacker = this.attackers[Math.floor(Math.random()*this.attackers.length)]
        const randomReceiver = this.receivers[Math.floor(Math.random()*this.receivers.length)]
        const damageDone = randomReceiver.receiveDamage(randomAttacker.strength)

        if (randomReceiver.health <=0 ){
            this.receivers.splice(this.receivers.indexOf(randomReceiver),1)

        }
        return damageDone

    }


    vikingAttack(){
        
        return attack(vikingArmy, saxonArmy)

     }
    saxonAttack(){

        return attack(saxonArmy, vikingArmy)

    }

// SUPERBONUS
    showStatus(){

        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }

        else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }

        else {
           return "Vikings and Saxons are still in the thick of battle."
        }
    }
}




// // War
// class War {

//     constructor(){
//         this.vikingArmy= []
//         this.saxonArmy = []
//     }

//     addViking(viking){

//         this.vikingArmy.push(viking)
//     }

//     addSaxon(saxon){
//         this.saxonArmy.push(saxon)
//     }

//     vikingAttack(){
        
//         const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

//         const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        
//         const damageDone = randomSaxon.receiveDamage(randomViking.strength)

//         if (randomSaxon.health <=0 ){
//             this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1)

//         }
//         return damageDone

//     }

//     saxonAttack(){

//         const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

//         const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

//         const damageDone = randomViking.receiveDamage(randomSaxon.strength)

//         if (randomViking.health <=0 ){
//             this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1)

//         }
//         return damageDone

//     }

//     showStatus(){

//         if (this.saxonArmy.length === 0){
//             return "Vikings have won the war of the century!"
//         }

//         else if (this.vikingArmy.length === 0){
//             return "Saxons have fought for their lives and survived another day..."
//         }

//         else {
//            return "Vikings and Saxons are still in the thick of battle."
//         }
//     }
// }

