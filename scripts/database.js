const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
        { id: 5, location: "Someplace, Somewhere", volume: "0" }
    ],
    haulers: [
        { id: 1, name: "Banshee", dockId: 2 },
        { id: 2, name: "Enterprise", dockId: 4 },
        { id: 3, name: "Big Kahuna", dockId: 1 },
        { id: 4, name: "Yamato", dockId: 3 },
        { id: 5, name: "Rogue", dockId: 2 },
        { id: 6, name: "Mister Barge", dockId: 4 }
    ],
    shippingShips: [
        { id: 1, name: "Nautical Nymph", haulerId: 2 },
        { id: 2, name: "Seabreeze Symphony", haulerId: 4 },
        { id: 3, name: "Whispering Gale", haulerId: 1 },
        { id: 4, name: "Emerald Seahawk", haulerId: 5 },
        { id: 5, name: "Neptune's Whim", haulerId: 2 },
        { id: 6, name: "Sea Sprite", haulerId: 6 },
        { id: 7, name: "Wanderlust", haulerId: 5 },
        { id: 8, name: "Midnight Voyager", haulerId: 3 },
        { id: 9, name: "Mystic Meridian", haulerId: 4 },
        { id: 10, name: "The Golden Galleon", haulerId: 1 }
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippingShip => ({...shippingShip}))
}