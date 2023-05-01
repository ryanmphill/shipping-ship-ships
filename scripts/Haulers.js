import { getHaulers, getShippingShips } from "./database.js";


const haulers = getHaulers()
const shippingShips = getShippingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            // Get the id of the hauler clicked
            let clickedHaulerId = itemClicked.dataset.id
            // Start a counter variable at 0
            let counter = 0
            // Iterate all of the shipping ships
            for (const ship of shippingShips) {
                // Does the haulerId foreign key match the id?
                if (clickedHaulerId === `${ship.haulerId}`) {
                    // Increase the counter by 1
                    counter += 1
                }
            }
            window.alert(`This hauler is carrying ${counter} shipping ships`)  
        }
    }
)

export const HaulerList = () => {

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each hauler object to an <li> and append to the haulersHTML string
        haulersHTML += `
        <li data-id="${hauler.id}"
        data-type="hauler"
        >${hauler.name}</li>
        `
    }

    haulersHTML += "</ul>"

    return haulersHTML
}