import { getHaulers, getShippingShips } from "./database.js";

const shippingShips = getShippingShips()
const haulers = getHaulers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "shippingShip") {
            // Get the haulerId value of the shipping ship clicked
            let haulingId = itemClicked.dataset.haulerId
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
            // Iterate the array of hauler objects
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (haulingId === `${hauler.id}`) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler
                }
            }
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }
)

export const ShippingShipList = () => {

    let shippingShipsHTML = "<ul>"

    for (const shippingShip of shippingShips) {
        // Convert each shippingShip object to an <li> and append to the shippingShipsHTML string
        shippingShipsHTML += `
        <li data-type="shippingShip"
        data-hauler-id=${shippingShip.haulerId}
        data-name="${shippingShip.name}"
        >${shippingShip.name}</li>
        `
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}