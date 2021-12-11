import { useEffect, useState } from "react";
import { Cat, Lion, Tiger, Dog, Elephant, Owl, Monkey, Parrot, Turtle } from "../classes";

const useAnimals = (animal) => {

    const [currentAnimal, setCurrentAnimal] = useState({});

    useEffect(() => {
        switch(animal) {
            case "Michi el gato":
                setCurrentAnimal(new Cat());
                break;
            case "Leo el león":
                setCurrentAnimal(new Lion());
                break;
            case "Trigo el tigre":
                setCurrentAnimal(new Tiger());
                break;
            case "Cheems el perro":
                setCurrentAnimal( new Dog());
                break;
            case "Many el elefante":
                setCurrentAnimal(new Elephant());
                break;
            case "Hedwig la lechuza":
                setCurrentAnimal( new Owl());
                break;
            case "Botas el mono":
                setCurrentAnimal( new Monkey());
                break;
            case "Parr el loro":
                setCurrentAnimal( new Parrot());
                break;
            case "Manuel el tortugo":
                setCurrentAnimal( new Turtle());
                break;
            default:
                setCurrentAnimal( {name:"", speak: () => ""});
        }
    }, [animal]);

    return currentAnimal;
};

export default useAnimals;