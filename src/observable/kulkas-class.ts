import { Observable, Observer } from "rxjs";
import { IAction, IKulkas } from "./kulkas";

class Action implements IAction {
    isi: string[] = [];
    lihat(): Observable<string[] | string> {
        return new Observable<string[] | string>((observer: Observer<string[] | string>) => {
            setTimeout(() => {
                if(this.isi.length != 0){
                    observer.next(`Isi kulkas saat ini: ${this.isi}`);
                } else {
                    observer.next(`Isi kulkas saat ini : Tidak ada`);
                }
            }, 1000)
        })
    }

    ambil(item: string): Observable<string> {
        return new Observable<string>((observer: Observer<string>) => {
            console.log(`Sedang mencari ${item}`);
            setTimeout(() => {
                if(this.isi.length != 0){
                    for(let i = 0; i < this.isi.length; i++){
                        if(this.isi[i].toLowerCase() == item.toLowerCase()){
                            this.isi.splice(i, 1);
                            observer.next(`Item ${item} diambil`)
                        }
                    }
                    observer.next(`Item ${item} tidak ada`)
                } else {
                    observer.next(`Kulkas kosong`)
                }
            }, 3000);
        })
    }

    simpan(item: string): Observable<string> {
        return new Observable<string>(observer => {
            setTimeout(() => {
                if(item) {
                    this.isi.push(item);
                    observer.next(`Item ${item} sudah disimpan`)
                } else {
                    observer.next(`Tidak ada item yang bisa disimpan`)
                }
            }, 2000)
        })
    }
}

export class Kulkas implements IKulkas {
    aksi: Action = new Action;

    buka(): Observable<IAction | string> {
        return new Observable<IAction | string>(observer => {
            observer.next(`Kulkas terbuka`);
        })
    }

    tutup(): Observable<string> {
        return new Observable<string>(observer => {
            observer.next(`Kulkas ditutup`);
        })
    }
}