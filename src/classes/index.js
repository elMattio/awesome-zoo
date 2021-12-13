class Animal {

    constructor(sound) {
        this.sound = sound;
    };

    speak(phrase) {
        if(!phrase) return "";
        let words = phrase.split(" ").filter((word) => word !== "");
        let talk = words.reduce((prevWords, word) => `${prevWords} ${this.sound} ${word}`) + ` ${this.sound}`;
        return talk;
    };

};

export class Lion extends Animal {

    constructor() {
        super("roar");
    };

};

export class Tiger extends Animal {

    constructor() {
        super("grrr");
    };

};

export class Dog extends Animal {

    constructor() {
        super("woff");
    };

};

export class Cat extends Animal {

    constructor() {
        super("meow");
    };

};

export class Elephant extends Animal {

    constructor() {
        super("bruuuu");
    };

};

export class Owl extends Animal {

    constructor() {
        super("hu huu");
    };

};

export class Monkey extends Animal {

    constructor() {
        super("hu hu haha");
    };

};

export class Parrot extends Animal {

    constructor() {
        super("quiquqi");
    };

};

export class Turtle extends Animal {

    constructor() {
        super("aghahhh");
    };

};