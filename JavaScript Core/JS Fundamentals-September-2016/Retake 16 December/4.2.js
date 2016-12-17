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
            towns.get(town).set("State", "departed");
        }


        if (action == "land" && !planes.has(planeId)) {
            planes.add(planeId)

            let oldArrivals = towns.get(town).get("Arrivals");
            let oldPlanes = towns.get(town).get("Planes");

            let newArrivals = oldArrivals + passengersCount;
            oldPlanes.add(planeId);

            towns.get(town).set("Arrivals", newArrivals);
            towns.get(town).set("Planes", oldPlanes);
            towns.get(town).set("State", "landed");

        }

        if (action == "depart" && towns.has(town) && towns.get(town).get("Arrivals") > 0) {
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
    let planesLeft = [...planes].sort((a,b) => a.localeCompare(b));
//console.log(planesLeft)
    //console.log(towns)

    /*for(let [key,value] of towns){
     console.log(key);
     for(let [key2, value2] of value){
     console.log(value2)
     }
     }*/

    for (let [key, value] of towns) {
        if (value.get("Arrivals") == 0) {
            towns.delete(key)
        }
        value.delete("State")
    }

    console.log("Planes left:")
    for (let item of planesLeft) {
        console.log("- " + item);
    }

    var mapAsc = new Map([...towns.entries()].sort((b,a)=>a[0].localeCompare(b[0])));

    for (let [key, value] of mapAsc) {
        console.log(key);
        for (let [k2, v2] of value) {
            if (typeof v2 == "object") {
                console.log("Planes:")
                let planesPrint = [...v2].sort((a,b) => a.localeCompare(b));
                for (let item of planesPrint) {
                    console.log("-- " + item);
                }
            } else {
                console.log(k2 + ": " + v2)
            }
        }
    }


    //[...towns].sort((a,b)=>console.log(a["arrivals"]))
}

solution([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
])

/*
solution([
    "Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"
])*/
