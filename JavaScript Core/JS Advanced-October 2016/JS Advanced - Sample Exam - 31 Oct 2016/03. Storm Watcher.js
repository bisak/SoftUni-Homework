let Record = (function () {
    let uniqueId = 0;
    class Record {
        constructor(temperture, humidity, pressure, windSpeed) {
            this.id = uniqueId++;
            this.temperature = temperture;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        toString() {
            let summary = '';
            summary += "Reading ID: " + this.id + "\n";
            summary += "Temperature: " + this.temperature + "*C\n";
            summary += "Relative Humidity: " + this.humidity + "%\n";
            summary += "Pressure: " + this.pressure + "hpa\n";
            summary += "Wind Speed: " + this.windSpeed + "m/s\n";
            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                summary += "Weather: Stormy"
            } else {
                summary += "Weather: Not stormy"
            }
            return summary;
        }
    }
    return Record;
})();

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());

let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());
