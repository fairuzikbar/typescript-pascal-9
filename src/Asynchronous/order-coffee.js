"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cafe {
    orderCoffee(order, cb) {
        console.log('Mohon menunggu, pesanan', order, 'sedang dibuat...');
        setTimeout(() => {
            if (order === 'tea')
                cb(`Pesanan ${order} tidak ada`);
            else {
                const result = `Kopi ${order}`;
                console.log('Pesanan', result, 'sudah selesai');
                cb(null, result);
            }
        }, 3000);
    }
}
exports.default = Cafe;
