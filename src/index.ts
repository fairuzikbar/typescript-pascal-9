//Udah beda dari yg atas
import { Car } from "./object/car";
import { CarType } from "./object/car-type";
import { Vehicle } from "./object/vehicle";

const civic: Vehicle = {
    id: '1',
    name: 'Civic',
    brand: 'Honda',
    type: CarType.SEDAN,
    engine: 2
}

const sedan: Car = new Car(civic);
console.log(sedan);
sedan.setFuel(100);
sedan.startEngine();