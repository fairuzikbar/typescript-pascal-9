import Cafe from './Asynchronous/order-coffee'

const cafe: Cafe = new Cafe();

const orders: string[] = [
    'cafe latte',
    'cappuccino',
    'kopi susu keluarga',
    'tea',
    'black tea',
    'hazelnut',
    'ice cream'
];

// const takeOrder: Promise<string>[] = orders.map((order) => {
//     return cafe.orderCoffeeWithAsync(order)
// })

// Promise.all(takeOrder)
// .then((result: string[]) => {
//     console.log(result)    
// })
// .catch((error) => {
//     console.error(error);
// })

async function orderProcess(): Promise<string[]>{
    const result: string[] = [];
    for(const order of orders){
        try {
            const takeOrder: string = await cafe.orderCoffeeWithAsync(order);
            result.push(takeOrder);
        } catch (error) {
            console.log(`Pesanan ${order} tidak berhasil, karena ${error}`);
        }
    }
    return result;
}

orderProcess()
.then((result: string[]) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})