function solution(input) {
    let planes = new Set();
    let towns = new Map();

    for (let line of input) {
        let tokens = line.split(" ");
        let planeId = tokens[0];
        let town = tokens[1];
        let passengersCount = Number(tokens[2]);
        let action = tokens[3];


        if (!towns.has(town)) {
            towns.set(town, new Map());
            towns.get(town).set("Arrivals", 0);
            towns.get(town).set("Departures", 0);
            towns.get(town).set("Planes", new Set());
        }


        if (action == "land" && !planes.has(planeId)) {
            planes.add(planeId);

            let oldArrivals = towns.get(town).get("Arrivals");
            let oldPlanes = towns.get(town).get("Planes");

            let newArrivals = oldArrivals + passengersCount;
            oldPlanes.add(planeId);

            towns.get(town).set("Arrivals", newArrivals);
            towns.get(town).set("Planes", oldPlanes);

        }

        if (action == "depart") {
            planes.delete(planeId);

            if (towns.has(town)) {
                let oldDepartures = towns.get(town).get("Departures");
                let oldPlanes = towns.get(town).get("Planes");

                let newDepartures = oldDepartures + passengersCount;
                oldPlanes.add(planeId);

                towns.get(town).set("Departures", oldDepartures + passengersCount);
                towns.get(town).set("Planes", oldPlanes);

            }
        }

    }
    let planesLeft = [...planes].sort((a, b) => a.localeCompare(b));

    for (let [key, value] of towns) {
        if (value.get("Arrivals") == 0) {
            towns.delete(key)
        }
    }

    console.log("Planes left:")
    if (planesLeft.length) {
        for (let item of planesLeft) {
            console.log("- " + item);
        }
    }


    let mapAsc = new Map([...towns.entries()].sort((a, b) => b[1].get("Arrivals") - a[1].get("Arrivals")));

    for (let [key, value] of mapAsc) {
        console.log(key);
        for (let [k2, v2] of value) {
            if (typeof v2 == "object") {
                console.log("Planes:")
                let planesPrint = [...v2].sort((a, b) => a.localeCompare(b));
                for (let item of planesPrint) {
                    console.log("-- " + item);
                }
            } else {
                console.log(k2 + ": " + v2)
            }
        }
    }
}

solution([
    "Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"
])
