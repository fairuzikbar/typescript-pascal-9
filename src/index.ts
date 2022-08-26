// Observable
/**
 * - Menyerupai promise
 * - Setiap obervable, hanya bisa dieksekusi/dijalankan ketika ada yang subscribe
 * - Yang menjadi subscribe adalah si observer
 * - Observer ini ada tiga yang bisa digunakan:
 *   - observer.next (berhasil)
 *   - observer.error (ketika ada error/gagal)
 *   - observer.complete (artinya ketika ada lagi observable)
 * contoh: Try Catch Finally
 */

import { Observable, Observer } from 'rxjs';
class PromiseVersusObservable {
    myObservable: any;
    myPromise: any;
    mySubscription: any;

    create(): void {
        this.myObservable = new Observable<string>(observer => {
            observer.next('Observable has emitted 1.');
            observer.next('Observable has emitted 2.');
            // Kalo udah di complete, yg setelah complete ngga akan dieksekusi
            // tadi mau ditambah, tapi ngga jadi
            // nambah jadi gini https://rxjs.dev/guide/observer
            observer.complete();
            observer.next('Observable has emitted 3.');
        })

        this.myPromise = new Promise<string>(resolve => {
            resolve('Promise has emitted.');
        })

        // Observable layaknya synchronous, dia akan dipanggil duluan ketika ada promise yang bersamanya
        // Bagaimana jika ingin tampil setelah promise?
        // Caranya dengan menerapkan setTimeOut
        setTimeout(() => {
            this.mySubscription = this.myObservable.subscribe((data:any) => {
                console.log(data);  
            })
        }, 0)
    
        this.myPromise.then((data:any) => {
            console.log(data);  
        })
    }

    cancel(): void {
        this.mySubscription.unsubscribe();
    }
}

const promiseObservable: PromiseVersusObservable = new PromiseVersusObservable();
promiseObservable.create()