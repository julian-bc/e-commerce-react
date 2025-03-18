/**
 * This function will return the total price of all products
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total price of all products
 */

export function totalPrice(products) {
    return products.reduce((acc, product) => acc + product.price, 0);
}
