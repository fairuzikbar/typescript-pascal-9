import { Vehicle } from "./vehicle";
import { CarType } from "./car-type";

// Kalo pake interface, harus pake implements, ngga bisa pake extends
// implements bisa lebih dari satu
export class Car implements Vehicle {
    id: string;
    name: string;
    brand: string = '';
    type: CarType;
    engine: number;
    isStarted?: boolean = false;
    private fuel: number = 0;

    constructor(car?: Car) {
        // Karena optional (?) === undefined
        // harus dicek dulu
        if(car){
            this.id = car.id
            this.name = car.name
            this.brand = car.brand
            this.type = car.type
            this.engine = car.engine
        }
    }

    //ketika menggunakan setter, kita bisa membuat validasi di dalamnya
    setFuel(fuel: number){
        this.fuel = fuel;
    }

    startEngine(): void {
        this.isStarted = true;
        if(this.fuel > 0) {
            console.log(`Engine car is started... brmmmmm`);
        } else {
            console.log(`Fuel is empty, please fill the tank...`);
        }
        
    }

    setName(name: string): void {
        this.name = name
    }

    getName(): string {
        return this.name
    }
}