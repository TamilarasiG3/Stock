import { getStockData } from './stock.js'

let prevPrice = null

setInterval(function () {
    const stockData = getStockData()
    renderStockTicker(stockData)
}, 1500)

function renderStockTicker(stockData) {

    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayTime = document.getElementById('time')
    const stockDisplayPriceIcon = document.getElementById('price-icon')

    const { name, sym, price, time } = stockData

    let priceDirectionIcon = 'gray.webp'

    if (prevPrice !== null) {
        if (price > prevPrice) {
            priceDirectionIcon = 'green.webp'
        } else if (price < prevPrice) {
            priceDirectionIcon = 'red.webp'
        }
    }

    const priceIconElement = document.createElement('img')
    priceIconElement.src = `svg/${priceDirectionIcon}`
    priceIconElement.alt = 'Price direction'

    stockDisplayPriceIcon.innerHTML = ''
    stockDisplayPriceIcon.appendChild(priceIconElement)

    stockDisplayName.innerText = name
    stockDisplaySymbol.innerText = sym
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time

    prevPrice = price
}

