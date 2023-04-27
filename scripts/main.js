import { DockList } from "./Docks.js";
import { HaulerList } from "./Haulers.js";


const dockHTMLlist = DockList()
const haulerHTMLlist = HaulerList()

// Select main container in index.html
const mainContainer = document.querySelector(".container")
// Build final HTML list
const mainHTMLlist = `
<section>
  <h2>Docks</h2>
  ${dockHTMLlist}
</section>
<section>
  <h2>Hauler Ships</h2>
  ${haulerHTMLlist}
</section>
`


// Add final HTML to the DOM
mainContainer.innerHTML = mainHTMLlist