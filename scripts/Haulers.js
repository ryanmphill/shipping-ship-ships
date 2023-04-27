import { getHaulers } from "./database.js";


const haulers = getHaulers()

export const HaulerList = () => {

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        haulersHTML += `
        <li>${hauler.name}</li>
        `
    }

    haulersHTML += "</ul>"

    return haulersHTML
}