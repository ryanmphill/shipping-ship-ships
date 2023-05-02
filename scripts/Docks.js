import { getDocks, getHaulers } from "./database.js";

// Sort docks alphabetically by location and store in variable
const docks = getDocks().sort((a, b) => {
    // Define variables for the items in array that are being compared
    // Use .toUpperCase() to ensure it is a case insensitive sort
    const compareNameA = a.location.toUpperCase()
    const compareNameB = b.location.toUpperCase()
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

const haulers = getHaulers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a dock list item clicked?
        if (itemClicked.dataset.type === "dock") {
            // Get the id of the dock clicked
            let dockId = itemClicked.dataset.id
            // Define a default array to hold matching hauler names
            let dockedHaulers = []
            // Iterate through all of the haulers
            for (const hauler of haulers) {
                // Does the dockId foreign key on the hauler object match the id of the clicked dock?
                if (dockId === `${hauler.dockId}`) {
                    // Add the hauler name to the dockedHaulers array
                    dockedHaulers.push(hauler.name)
                }
            }
            // Check if one hauler is at the dock, and print alert message
            if (dockedHaulers.length === 1) {
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${dockedHaulers[0]}`)
            }
            // Check if no haulers are at the dock, and print alert message
            if (dockedHaulers.length === 0) {
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading nothing`)
            }
            // Check if multiple haulers are at the dock, and print alert message
            if (dockedHaulers.length > 1) {
                // Define a default string to print as alert message
                let messageString = `The ${itemClicked.dataset.location} dock is currently unloading: `
                // Iterate through string
                for (let index = 0; index < dockedHaulers.length; index++) {
                    // iterate through all but the last hauler in array
                    if (index < dockedHaulers.length - 1) {
                        // Add haulers to string
                        messageString += `${dockedHaulers[index]}, `
                    } else {
                        // Add the last hauler
                        messageString += `${dockedHaulers[index]}`
                    }
                    
                }
                // Print the messageString as an alert
                window.alert(messageString)
            }
        }  
    }
)

export const DockList = () => {

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `
        <li data-id="${dock.id}"
        data-location="${dock.location}"
        data-type="dock"
        >${dock.location} can hold ${dock.volume} million tons of cargo.</li>
        `
    }

    docksHTML += "</ul>"

    return docksHTML
}