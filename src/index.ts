// TypeData
let fullName: string = 'A';
const age: number = 20;
let price: number = 20_000_000;
//underscore ini digunakan untuk membantu membaca aja. Hasil di js akan tanpa underscore
const isDone: boolean = true;

let apaAja: any = 20;
apaAja = '20';
apaAja = true;

// null
const isNull: null = null;
// unknown ini bagian dari any, bisa digunakan untuk tipe data apapun. Katanya lebih aman
const isUnknown: unknown = 'test';
console.log(isUnknown);

// any vs unknown
let thisAny: any;
let thisUnknown: unknown;

thisAny = 'A';
thisUnknown = 'A';
thisAny = [];
thisUnknown = [];
thisAny = {};
// thisAny.foo.bar;
thisUnknown = {};
// thisUnknown.foo.bar;
// thisAny();
// thisUnknown();

let say; //undefined
let sayAgain: undefined;
console.log(typeof say); //undefined
console.log(typeof sayAgain); //undefined

if(sayAgain === undefined){
    console.log('undefined');
    
}

// Enum
// (1) harus PascalCase;
// (2) nilai default enum dimulai dari 0
enum Color {
    Red = 'Red', //nilai default nya Red = 0, kalo udah diinisiasi, nilai nya jadi berubah
    Green = 'Green', //nilai default nya Green = 1
    Blue = 'Blue' //nilai default nya Blue = 2
}
// karena Color ini jadi tipe data, maka bisa begini
const color: Color = Color.Red;
// const color01: Color = true; //ini akan error karena nilai true tidak ada di dalam enum Color
console.log(Color.Red); //kalo ngga diinisiasi, outputnya 0, kalo udah outputnya Red (sesuai inisiasi)

let isMarried: string | undefined;
isMarried = 'yes';
isMarried = undefined;

// Array
let cars: string[] = ['Avanza', 'Ferrari'];
//bisa dipush juga
cars.push('Mazda');
console.log(cars);

// Tuple
// biasa digunakan di pagination yg nilai balikannya ada lebih dari 1
let animals: [string, number] = ['Kucing oren', 4];
animals.push(20);
console.log(animals);
console.log(animals[0]);

// Object
const Employee = {
    name: 'John',
    age: 29,
    skills: ['Excel', 'PPT', 'Word']
}

// type alias
// Ngga cuman berlaku di object
// Employee ini jadi tipe data juga
type Employee = {
    name: string,
    age: number,
    skills: string[]
}

const john: Employee = {
    name: 'John',
    age: 29,
    skills: ['Office']
}

// Function
function sayHello(name: string, age?:number): string { //tanda tanya ini memberikan nilai optional, bisa diisi atau engga. Kalo ngga ada tanda tanyanya, ini akan error karena function ini meminta nilai masukkan, sedangkan waktu di console.log() kosong dan ngga diisi
    //narrowing
    if(typeof age !== undefined){
        return `Hello ${name}`
    }
    return `Hai...`
}

console.log(sayHello('Daud'));

// Function ini juga berlaku bagi employee
function sayHello2(employee: Employee): Employee {
    employee.name = 'John';
    employee.age = 20;
    employee.skills = ['Office']
    return employee
}

console.log(sayHello2(Employee));

// Import
import { greeting } from "./greeting";

greeting();

//Udah beda dari yg atas
import { Car } from "./object/car";
import { CarType } from "./object/car-type";
const sedan: Car = new Car();
sedan.id = '1';
sedan.name = 'Civic';
sedan.brand = 'Honda';
sedan.engine = 2;
sedan.type = CarType.SEDAN;
console.log(sedan);

console.log(sedan.getName());
sedan.setName('Civic 2.0');
console.log(sedan);

sedan.setFuel(0);
sedan.startEngine();