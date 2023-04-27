import { getDocks } from "./database.js";

const docks = getDocks()

export const DockList = () => {

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `
        <li>${dock.location} can hold ${dock.volume} million tons of cargo.</li>
        `
    }

    docksHTML += "</ul>"

    return docksHTML
}