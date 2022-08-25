import { Kulkas } from './Kulkas/refrigerator-class'

const kulkas: Kulkas = new Kulkas();

async function cekKulkas() {    
    let action = await kulkas.buka();
    console.log(await action.lihat().catch(error => error));
    console.log(`Sedang menyimpan item...`);
    console.log(await action.simpan('pepaya').catch(error => error));
    console.log(await action.simpan('mangga').catch(error => error));
    console.log(await action.simpan('pisang').catch(error => error));
    console.log(await action.simpan('jambu').catch(error => error));
    console.log(await action.lihat().catch(error => error));
    console.log(await action.ambil('manggis').catch(error => error));
    console.log(await action.ambil('mangga').catch(error => error));
    console.log(await action.lihat().catch(error => error));    
    console.log(await kulkas.tutup());
}

cekKulkas()