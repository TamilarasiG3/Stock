export function getStockData() {
    return {
        name: 'TATA',
        sym: '💱',
        price: Number((Math.random() * 3).toFixed(2)),
        time: new Date().toLocaleTimeString()
    }
}