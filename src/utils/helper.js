export const getPrice = (arr, isPriceBefore) => {
    let price = 0;
    let priceBefore = 0;
    arr.forEach(e => {
        price = price + e.price
        priceBefore = priceBefore + e.priceBefore
    });

    return isPriceBefore ? priceBefore : price
}