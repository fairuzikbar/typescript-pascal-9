import { Vehicle } from "./vehicle";
import { CarType } from "./car-type";
import { CarFeature, CarSpec } from "./car-feature";

export class Car implements CarFeature, CarSpec {
    private fuel: number = 0;
    readonly color: string;

    // Dependency Injection (DI) - > inject file dari luar ke dalam sebuah class
    // Fungsi -> kita bisa menggunakan file tersebut
    // readonly -> memberikan sebuah akses dari luar (public)
    // tetapi tidak bisa diubah nilainya (value)
    constructor(private readonly vehicle?: Vehicle) {}
    //ketika menggunakan setter, kita bisa membuat validasi di dalamnya
    setFuel(fuel: number): void{
        this.fuel = fuel;
    }

    startEngine(): void {
        if(this.fuel > 0) {
            console.log(`Engine car is started... brmmmmm`);
        } else {
            console.log(`Fuel is empty, please fill the tank...`);
        }
        
    }

    safety(feature: string[]): void {
        feature.forEach((item => {
            console.log(item);
        }))
    }
    
    speed(km: number): string {
        if(km > 500){
            return `Sport mode`
        } return `City car`
    }

    engineSpec(cc: number): number {
        return cc;
    }

    engineType(type: string): string {
        return type;
    }

    fuelType(fuel: string): string {
        return fuel;
    }

}