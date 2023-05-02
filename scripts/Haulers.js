import { getHaulers, getShippingShips } from "./database.js";

// Sort hauler ships alphabetically by name and store in variable
const haulers = getHaulers().sort((a, b) => {
    // Define variables for the items in array that are being compared
    // Use .toUpperCase() to ensure it is a case insensitive sort
    const compareNameA = a.name.toUpperCase()
    const compareNameB = b.name.toUpperCase()
    /* Compare both names and determine which one comes first. 
       The sort method does this by comparing UTF-16 code unit values*/
    
    /* If the comparison function returns a negative number (-1), it means that a should 
       come before b in the sorted array. */
    if (compareNameA < compareNameB) {
        return -1;
    }
    /* If the comparison function returns a positive number (1), it means that a should 
       come after b in the sorted array. */
    if (compareNameA > compareNameB) {
        return 1;
    }
    /* If the comparison function returns 0, it means that the order of a and b should remain unchanged. */
    if (compareNameA === compareNameB) {
        return 0;
    }
})

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