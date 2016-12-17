function solution(input) {
    let planes = new Set();
    let towns = new Map();

    for (let line of input) {
        let tokens = line.split(" ");
        let planeId = tokens[0];
        let town = tokens[1];
        let passengersCount = Number(tokens[2]);
        let action = tokens[3];

        if (action == "land") {
            planes.add(planeId);

            if (towns.has(town)) {
                let oldArrivals = towns.get(town).get("arrivals");
                towns.get(town).get("planes").add(planeId);
                let oldPlanes = towns.get(town).get("planes");

                towns.get(town).set("arrivals", oldArrivals + passengersCount);
                towns.get(town).set("planes", oldPlanes);

            } else {
                towns.set(town, new Map());
                towns.get(town).set("arrivals", passengersCount);
                let currentPlane = new Set();
                currentPlane.add(planeId)
                towns.get(town).set("planes", currentPlane);
            }

        }
        if (action == "depart") {
            planes.delete(planeId);

            if (towns.has(town)) {
                let oldDepartures = towns.get(town).get("departures") || 0;
                //towns.get(town).get("planes").delete(planeId);
                let oldPlanes = towns.get(town).get("planes");

                towns.get(town).set("departures", oldDepartures + passengersCount);
                towns.get(town).set("planes", oldPlanes);

            }
        }


        /*console.log(planeId)
         console.log(town)
         console.log(passengersCount)
         console.log(action)*/
    }

    let planesLeft = [...planes].sort((a, b) => a.localeCompare(b));
    //console.log(planesLeft)
    console.log(towns)
}

solution([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
])