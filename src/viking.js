// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength;
    }
    receiveDamage(demaged){
        this.health -= demaged;
    }
};

// Viking
class Viking extends Soldier {
    constructor (name, health,strength){
        super (health,strength);
        this.name = name;
    }
    receiveDamage(demaged){
        this.health -= demaged;
        if (this.health > 0) {
            return (this.name+ " has received "+ demaged + " points of damage");
        } else {
            return (this.name + " has died in act of combat");
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(demaged){
        this.health -= demaged;
        if (this.health > 0) {
            return (`A Saxon has received ${demaged} points of damage`);
        } else {
            return ('A Saxon has died in combat');
        }

    }

}

// War
class War {
    constructor(){
        this.saxonArray= [];
        this.vikingArmy= [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArray.push(saxon);
    }
    vikingAttack() {
        const indexSaxon = Math.floor(Math.random() * this.saxonArray.length);
        const viking = this.vikingArmy(Math.floor(Math.random() * this.vikingArray.length));
        const message = saxon.receiveDamage(viking.strength);
        
        if(saxon.health <=0){
            this.saxonArray.splice(indexSaxon,1);
        }
        return message;
    }   

    saxonAttack(){
        const indexViking = Math.floor(Math.random() * this.vikingArray.lenght);
        const saxon = this.saxonArmy(Math.floor(Math.random()*this.saxonArray.length));
        const message = viking.receiveDamage(saxon.strength);

        if(viking.health <=0){
            this.vikingArray.splice(indexViking,1);
        }
        return message;
    }

//     showStatus(){

//     }
}


