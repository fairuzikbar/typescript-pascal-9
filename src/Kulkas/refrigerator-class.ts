import { IAction, IKulkas } from "./refrigerator";

class Action implements IAction {
    isi: string[] = [];
    lihat(): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            setTimeout(() => {
                console.log(`Isi kulkas saat ini :`);
                if(this.isi.length != 0){
                    resolve(this.isi);
                } else {
                    reject(`Tidak ada`);
                }
            }, 1000)
        })
    }
    ambil(item: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            console.log(`Sedang mencari ${item}`);
            setTimeout(() => {
                if(this.isi.length != 0){
                    for(let i = 0; i < this.isi.length; i++){
                        if(this.isi[i].toLowerCase() == item.toLowerCase()){
                            this.isi.splice(i, 1);
                            resolve(`Item ${item} diambil`)
                        }
                    }
                    reject(`Item ${item} tidak ada`)
                } else {
                    reject(`Kulkas kosong`)
                }
            }, 3000);
        })
    }

    simpan(item: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if(item) {
                    this.isi.push(item);
                    resolve(`Item ${item} disimpan`)
                } else {
                    reject(`Tidak ada item yang bisa disimpan`)
                }
            }, 2000)
        })
    }
}

export class Kulkas implements IKulkas {
    // constructor() {
    //     this.action = new Action();
    // }

    buka(): Promise<IAction> {
        return new Promise<IAction>((resolve, reject) => {
            console.log(`Kulkas terbuka`);
            try {
                resolve(new Action());
            } catch (error) {
                reject(error)
            }
        })
    }

    tutup(): Promise<void> {
        return new Promise<void>(() => {
            console.log(`Kulkas ditutup`);
        })
    }
}