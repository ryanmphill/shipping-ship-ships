import { getContracts, getDocks, getHaulers } from "./database.js";

const contracts = getContracts()

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
                if (dockId === `${hauler.currentDockId}`) {
                    // Iterate through contracts and check if contract exists between hauler and dock
                    for (const contract of contracts) {
                        if (dockId === `${contract.dockId}` && contract.haulerId === hauler.id) {
                            // Add the hauler name to the dockedHaulers array
                            dockedHaulers.push(hauler.name)
                        }
                    }
                    
                }
            }
            // Check if one hauler is at the dock, and print alert message
            if (dockedHaulers.length === 1) {
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading the ${dockedHaulers[0]}`)
            }
            // Check if no haulers are at the dock, and print alert message
            if (dockedHaulers.length === 0) {
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading nothing`)
            }
            // Check if 2 haulers are at dock and print alert message
            if (dockedHaulers.length === 2) {
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading the ${dockedHaulers[0]} and the ${dockedHaulers[1]}`)
            }
            // Check if more than 2 haulers are at the dock, and print alert message
            if (dockedHaulers.length > 2) {
                // Define a default string to print as alert message
                let messageString = `The ${itemClicked.dataset.location} dock is currently unloading: `
                // Iterate through string
                for (let index = 0; index < dockedHaulers.length; index++) {
                    // iterate through all but the last hauler in array
                    if (index < dockedHaulers.length - 1) {
                        // Add haulers to string
                        messageString += `the ${dockedHaulers[index]}, `
                    } else {
                        // Add the last hauler
                        messageString += `and the ${dockedHaulers[index]}`
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
    // Iterate through docks
    for (const dock of docks) {
        // Define empty array to hold the haulers each dock has a contract with
        let contractedHaulers = []
        // Iterate through contracts and haulers 
        for (const contract of contracts) {
            for (const hauler of haulers) {
                // Check to see if there is a contract between a hauler and a dock
                if (dock.id === contract.dockId && contract.haulerId === hauler.id) {
                    // Add the contracted hauler to the array
                    contractedHaulers.push(hauler.name)
                }
            }
        }
        // Define the beginning of the HTML list
        docksHTML += `
        <li data-id="${dock.id}"
        data-location="${dock.location}"
        data-type="dock"
        >${dock.location} can hold ${dock.volume} million tons of cargo.
         ${dock.location} has contracts with ` 
        // Check if there is only one contracted hauler
        if (contractedHaulers.length === 1) {
            docksHTML += `the ${contractedHaulers[0]}`
        }
        // Check if there are 2 contracted haulers
        if (contractedHaulers.length === 2) {
            docksHTML += `the ${contractedHaulers[0]} and the ${contractedHaulers[1]}`
        }
        // Check if there are more than 2 contracted haulers
        if (contractedHaulers.length > 2) {
            for (let index = 0; index < contractedHaulers.length; index++) {
                if (index < contractedHaulers.length - 1) {
                    docksHTML += `the ${contractedHaulers[index]}, `
                } else {
                    docksHTML += `and the ${contractedHaulers[index]}`
                }
                
            }
        }
        // Check if there are no contracted haulers
        if (contractedHaulers.length === 0) {
            docksHTML += `no shipping companies at this time`
        }
        // Close the list item
        docksHTML += `</li>`
    }
    // Close the unordered list
    docksHTML += "</ul>"
    // Return the HTML list
    return docksHTML
}