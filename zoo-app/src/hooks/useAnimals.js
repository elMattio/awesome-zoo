import { Cat, Lion, Tiger, Dog, Elephant, Owl, Monkey, Parrot, Turtle } from "../classes";

const useAnimals = (animal) => {
    switch(animal) {
        case "Michi el gato":
            return new Cat();
        case "Leo el león":
            return new Lion();
        case "Trigo el tigre":
            return new Tiger();
        case "Cheems el perro":
            return new Dog();
        case "Many el elefante":
            return new Elephant();
        case "Hedwig la lechuza":
            return new Owl();
        case "Botas el mono":
            return new Monkey();
        case "Parr el loro":
            return new Parrot();
        case "Manuel el tortugo":
            return new Turtle();
        default:
            return {name:"", speak: () => ""}
    }
};

export default useAnimals;