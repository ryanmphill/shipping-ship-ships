import { DockList } from "./Docks.js";
import { HaulerList } from "./Haulers.js";
import { ShippingShipList } from "./ShippingShips.js";


const dockHTMLlist = DockList()
const haulerHTMLlist = HaulerList()
const shippingShiptHTMLlist = ShippingShipList()

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
<section>
  <h2>Shipping Ships</h2>
  ${shippingShiptHTMLlist}
</section>
`


// Add final HTML to the DOM
mainContainer.innerHTML = mainHTMLlist