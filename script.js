const SIZE_SMALL = {
    price: 50,
    cal: 20
};
const SIZE_MIDDLE = {
    price: 75,
    cal: 30
}
const SIZE_LARGE = {
    price: 100,
    cal: 40
};
const STUFFING_CHEESE = {
    price: 10,
    cal: 20
};
const STUFFING_SALAD = {
    price: 20,
    cal: 5
};
const STUFFING_POTATO = {
    price: 15,
    cal: 10
};
const TOPPING_MAYO = {
    price: 15,
    cal: 10
};
const TOPPING_SPICE = {
    price: 15,
    cal: 10
}

function Hamburger(size) {
    this.size = size;
    this.stuffings = [];


    this.addModifier = function (stuffing) {
        return this.stuffings.push(stuffing);
    }

    this.calculateCal = function () {
        const sum1 = this.size.cal;
        const sum2 = this.getProperty(this.stuffings, "cal")
        return sum1 + sum2 + " кал";
    }

    this.calculatePrice = function () {
        const sum1 = this.size.price;
        const sum2 = this.getProperty(this.stuffings, "price");
        return sum1 + sum2 + " тугр";
    }

    this.getProperty = function (arr, prop) {
        return arr.reduce((sum, stuff) => {
            return sum + stuff[prop];
        }, 0)
    }
}

const hamburger = new Hamburger(SIZE_LARGE);
hamburger.addModifier(STUFFING_POTATO);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCal());
hamburger.addModifier(STUFFING_POTATO);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCal());


