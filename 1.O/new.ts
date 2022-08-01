class Dog {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'dog';
    }

    public makeSound() : string {
        return 'Woof woof'
    }
}

class Cat {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cat';
    }

    public makeSound() : string {
        return 'Meow'
    }
}

class Parrot {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'parrot';
    }

    public makeSound() : string {
        return 'AAARRR'
    }

}

class Wolf {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'wolf';
    }

    public makeSound() : string {
        return 'Howl'
    }
}





class Zoo {
    private _animals : Array<Object> = new Array<Object>(); // Creating an empty array to store animals

    public addAnimal(animal: object) { // Method to add (push) objects into the empty array we made
        this._animals.push(animal);
    }

    get animals(): Array<Object> { // Method to return the array with animals
        return this._animals;
    }


}

let zoo = new Zoo; // New variable created from the Zoo class
zoo.addAnimal(new Cat); // object Cat added to the new zoo variable, which is then pushed to the animals array
zoo.addAnimal(new Dog); // object Dog added to the new zoo variable, which is then  pushed to the animals array
zoo.addAnimal(new Parrot); // object Parrot added to the new zoo variable, which is then pushed to the animals array
zoo.addAnimal((new Wolf)); // object Wolf added to the new zoo variable, which is then pushed to the animals array

// For each loop on the variable zoo.animals array returning the animal type and sound
zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound(animal) + "<br>");
});