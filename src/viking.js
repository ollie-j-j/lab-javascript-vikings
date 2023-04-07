// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }
    
    battleCry()  {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length); 
        const attackedSaxon = this.saxonArmy[randomSaxon];
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length); 
        const attackingViking = this.vikingArmy[randomViking];
        // Calling the receiveDamage method with the strength of a Viking
        const saxonDamage = attackedSaxon.receiveDamage(attackingViking.strength);

        if (attackedSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }

        return saxonDamage;

    }
    saxonAttack() {
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);  
        const attackedViking = this.vikingArmy[randomViking];
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length); 
        const attackingSaxon = this.saxonArmy[randomSaxon];
        // Calling the receiveDamage method with the strength of a Saxon
        const vikingDamage = attackedViking.receiveDamage(attackingSaxon.strength);

        if (attackedViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }

        return vikingDamage;

    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

}



