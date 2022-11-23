// 'this' inside global scope

this.me = 'Sushant';
console.log(this.me);

this.myHouse = {
    tv: 'panasonic TV'
};
console.log(this.myHouse.tv);


// 'this' inside object

let myReadingRoom = {
    book: 'book is in book shelf'
};
console.log(myReadingRoom.book);

// 'this' inside a method (when function is inside an object or class is method)


let myShelf = {
    shelf: 'shelf books',
    addBooksToShelf() {
         console.log(`books added to ${this.shelf} `);
    }
};

myShelf.addBooksToShelf();


// 'this' inside a function

this.hobby =  'cycling';

const printHobby = function(coding){
    console.log(`Your hobby is ${this.hobby} with ${coding}`);
};



let romanHobby = {hobby:'wrestling'};

this.rollinsHobby = {hobby:'Curb Storm'};

printHobby.call(this, 'Javascript');
printHobby.call(romanHobby, 'Spear');
printHobby.call(this.rollinsHobby, 'Sling Blade');


// 'this' inside an inner function

this.name = 'John Cena';

this.Ambrose = {
    name:'Dean'
};

let edge = {
    name:'Edge'
};

const printName = function(StringV){
    let innerFunction = (stringT) => {
        console.log(`Your name is ${this.name} and ${stringT} and ${StringV}` );
    }
    innerFunction('Welcome to WWe');
}

printName.call(this, 'Welcome to printing');
printName.call(this.Ambrose, 'Welcome to vsCode');
printName.call(edge, 'Welcome to wwe');


// 'this' inside a constructor 

let createWrestler = function (name, specialMove){
    this.name = `${name}`,
    this.specialMove = `${specialMove}`
}

createWrestler.prototype.AddToRoster = function(info){
    console.log(`${this.name} is added to roster with special move ${this.specialMove} is ${info}`);
}


const cena = new createWrestler('John', 'AA');
const jericho = new createWrestler('Chris', 'Walls');

cena.AddToRoster('fit');
jericho.AddToRoster('slim');


// 'this' inside classes

class createEmployee{
    constructor(name,salary)
    {
        this.name = name;
        this.salary = salary;
    }
    printDetails()
    {
        console.log(`${this.name} from 13 reasons why earning ${this.salary}`);
    }

}

this.hannah = new createEmployee('Hannah Baker', 10000);
const clay = new createEmployee('Clay Jenson', 2000);
this.hannah.printDetails();
clay.printDetails();
