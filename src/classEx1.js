class Car {
    brand;
    color; 
    gasolinePerKilometer; 
    
    constructor(brand, color, gasolinePerKilometer) {
        this.brand = brand;
        this.color = color;
        this.gasolinePerKilometer = gasolinePerKilometer;
    };

    tripPrice(distanceKm, gasolinePrice) { 
        const gasolineLitersNeeded = distanceKm / this.gasolinePerKilometer;
        const result = gasolineLitersNeeded * gasolinePrice;
        
        return result;
    }
}

const celta = new Car('Chevrolet', 'green', 13);
const fordK = new Car('Ford', 'red', 12);

console.log(celta.tripPrice(100, 6.09));
console.log(fordK.tripPrice(100, 6.09));