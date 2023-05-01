import { getShippingShips } from "./database.js";

const shippingShips = getShippingShips()

export const ShippingShipList = () => {

    let shippingShipsHTML = "<ul>"

    for (const shippingShip of shippingShips) {
        // Convert each shippingShip object to an <li> and append to the shippingShipsHTML string
        shippingShipsHTML += `
        <li>${shippingShip.name}</li>
        `
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}