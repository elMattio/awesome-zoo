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

class Lion extends Animal {

    constructor() {
        super("roar");
        this.patience = Math.random()*100; //Just for fun
    };

};

class Tiger extends Animal {

    constructor() {
        super("grrr");
        this.patience = Math.random()*100; //Just for fun
    };

};

class Dog extends Animal {

    constructor() {
        super("woff");
        this.patience = Math.random()*100; //Just for fun
    };

};

class Cat extends Animal {

    constructor() {
        super("meow");
        this.patience = Math.random()*100; //Just for fun
    };

};

class Elephant extends Animal {

    constructor() {
        super("bruuuu");
        this.patience = Math.random()*100; //Just for fun
    };

};

class Owl extends Animal {

    constructor() {
        super("hu huu");
        this.patience = Math.random()*100; //Just for fun
    };

};

class Monkey extends Animal {

    constructor() {
        super("hu hu haha");
        this.patience = Math.random()*100; //Just for fun
    };

};

/* 
Bienvenido a nuestro fantastico zoologico, hogar de los animales mas ocurrentes.
Hace unos dias un loro bromista le enseño a todos los animales a repetir lo que escuchan, aunque no pueden evitar que se les escape un rugido o graznido de vez en cuando
No me crees? Trata de hablar con cada uno de ellos y compruebalo por ti mismo, veras que es muy interesante.
Aunque ten cuidado, si les hablas por mucho tiempo o con frases demasiado largas dejaran de presatarte atencion.
Buena suerte y disfruta el paseo!

1-Popup explicando el contexto (scrollable nomas) Tiene que poder cerrarse con el click o escape
2-Chat con los animalitos que les escribis y te contestan
3-Si la paciencia se llena se cierra el chat con ese animal
4-Sale un toast axplicando que el animal se hincho las pelotas de escucharte
5-Cada vez que se abre un chat se instancia un nuevo animal
6-Deberia poder verse el chat completo de todos los chats a menos que se abandone la pagina
7-Desplegarlo en githubb pages
8-Mobile first
*/