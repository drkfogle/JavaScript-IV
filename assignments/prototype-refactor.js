

// Prototype Refactor

// 1. Copy and paste your code or the solution from yesterday

// function GameObject (attrs){
// this.dimensions = attrs.dimensions;
// this.createdAt = attrs.createdAt;
// this.name = attrs.name;
// }
// GameObject.prototype.destroy = function (){
//     return `${this.name} was removed from the game.`
// }

// function CharacterStats (attrs){
//     GameObject.call(this, attrs);
//     this.healthPoints = attrs.healthPoints;
//     this.name = attrs.name;
//     }
//     CharacterStats.prototype = Object.create(GameObject.prototype);

//     CharacterStats.prototype.takeDamage = function () {
//     return (`${this.name} took damage.`)
//     }


// function Humanoid(attrs){
//     CharacterStats.call(this,attrs);
//     this.team = attrs.team;
//     this.weapons = attrs.weapons;
//     this.language = attrs.language;
//     }
//     Humanoid.prototype = Object.create(CharacterStats.prototype);
//     Humanoid.prototype.greet = function (){
//     return (`${this.name} offers a greeting in ${this.language}.`)
//     }

// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

class GameObject{
    constructor (attrs) {
        this.dimensions = attrs.dimensions;
        this.createdAt = attrs.createdAt;
    }
    destroy (){
        console.log(`{this.name} was removed from the game.`)
    }
}

class CharacterStats extends GameObject{
    constructor (statsattrs){
        super(statattrs);
        this.healthpoints = statsattrs.healthpoints;
        this.name = statsattrs.name;
    }
    takeDamage(){
        return (`${this.name} took damage.`)
    }
}

class Humanoid extends CharacterStats{
    super(Hattrs){
        this.team = Hattrs.team;
        this.weapons = Hattrs.weapons;
        this.language = Hattrs.language;
    }
    greet(){
        return (`${this.name} offers a greeting in ${this.language}.`)
    }
}
