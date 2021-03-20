

let Dog = function(breed, color, weight) {
    this.breed = breed;
    this.color = color;
    this.weight = weight;
}

Dog.prototype.fatten = function() {
    console.log(`The ${this.color} ${this.breed} was ${this.weight} pounds, but is now ${this.weight + 1} pounds. Woof!`)
}

// let pug = new Dog('Pug', 'black', 5);
// let corgi = new Dog('Corgi', 'white', 10)




function Pug() {
    Dog.call(this, 'Pug', 'black', 5)
}

Pug.prototype = Object.create(Dog.prototype)

let pug = new Pug()

console.log(pug)