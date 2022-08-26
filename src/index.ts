// Operator yg biasa dipake :
// Pipe
// Map
// SwitchedMap
// tap
// retry -> untuk mengulangi langkah
// delay -> semacam setTimeOut di js
// distinct -> data yang selanjutnya yg sama tidak akan ditampilkan

// Cara biasa
const array = [1,2,3];
const multiply = array.map(x => x *x);

console.log(multiply);


// Menggunakan observer
import { of, map, observable, tap, switchMap, catchError } from 'rxjs';

of(1, 2, 3)
    .pipe(map((x) => x * x))
    .subscribe((v) => console.log(`value: ${v}`));


// Kulakas use observable
import { Kulkas } from './observable/kulkas-class'

// const kulkas: Kulkas = new Kulkas();

// function cekKulkas() {    
//     kulkas.buka();
//     kulkas.aksi.lihat().subscribe((data) => console.log(data));
//     console.log(`Sedang menyimpan item...`);
//     kulkas.aksi.simpan('pepaya').subscribe(data => console.log(data));
//     kulkas.aksi.simpan('mangga').subscribe(data => console.log(data));
//     kulkas.aksi.simpan('pisang').subscribe(data => console.log(data));
//     kulkas.aksi.simpan('jambu').subscribe(data => console.log(data));
//     kulkas.aksi.lihat().subscribe(data => console.log(data)) ;
//     kulkas.aksi.ambil('manggis').subscribe((data) => console.log(data));
//     kulkas.aksi.ambil('mangga').subscribe((data) => console.log(data));
//     kulkas.aksi.lihat().subscribe((data) => console.log(data));
//     console.log(kulkas.tutup());
// }

// cekKulkas()

// cara 2
const kulkas: Kulkas = new Kulkas();
const action = kulkas.buka();
action.pipe(
    tap((data) => console.log(data)),
    switchMap(() => {
        return kulkas.aksi.lihat();
    }),
    catchError((error) => {
        return of('Ada Error')
    }),
    tap((data) => console.log(data)),
    switchMap(() => {
        return kulkas.aksi.simpan('Pepaya');
    }),
    catchError((error) => {
        return of('Ada Error')
    }),
    tap((data) => console.log(data)),
    switchMap(() => {
        return kulkas.aksi.lihat();
    }),
    catchError((error) => {
        return of('Ada Error')
    }),
    tap((data) => console.log(data)),
    switchMap(() => {
        return kulkas.aksi.simpan('Mangga');
    }),
    catchError((error) => {
        return of('Ada Error')
    }),
    tap((data) => console.log(data)),
    switchMap(() => {
        return kulkas.aksi.ambil('Manggis');
    }),
    catchError((error) => {
        return of('Ada Error')
    }),
    tap((data) => console.log(data)),
    switchMap(() => {
        return kulkas.aksi.ambil('Pepaya');
    }),
    catchError((error) => {
        return of('Ada Error')
    }),
    tap((data) => console.log(data)),
    switchMap(() => {
        return kulkas.aksi.lihat();
    }),
    catchError((error) => {
        return of('Ada Error')
    }),
    tap((data) => console.log(data)),
    switchMap(() => {
        return kulkas.tutup();
    }),
    catchError((error) => {
        return of('Ada Error')
    })
).subscribe({
    next: data => console.log(data),
    error: error => console.log(error),
    complete: () => console.log('Program selesai')
})