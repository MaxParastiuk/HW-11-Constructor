class Hamburger {
    static SIZE_SMALL = {
        price: 50,
        cal: 20
    };
    static SIZE_MIDDLE = {
        price: 75,
        cal: 30
    }
    static SIZE_LARGE = {
        price: 100,
        cal: 40
    };
    static STUFFING_CHEESE = {
        price: 10,
        cal: 20
    };
    static STUFFING_SALAD = {
        price: 20,
        cal: 5
    };
    static STUFFING_POTATO = {
        price: 15,
        cal: 10
    };
    static TOPPING_MAYO = {
        price: 15,
        cal: 10
    };
    static TOPPING_SPICE = {
        price: 15,
        cal: 10
    }

    constructor(size, stuffing) {
        this.size = size;
        this.stuffings = [stuffing];
    }

    addStuffing(stuffing) {
        return this.stuffings.push(stuffing);
    }

    calculateCal() {
        const sum1 = this.size.cal;
        const sum2 = this.getSum(this.stuffings, "cal")
        return sum1 + sum2 + " кал";
    }

    calculatePrice() {
        const sum1 = this.size.price;
        const sum2 = this.getSum(this.stuffings, "price");
        return sum1 + sum2 + " тугр";
    }

    getSum(arr, prop) {
        if (arr.length > 0) {
            let sum = 0;
            arr.forEach((item) => {
                for (let key in item) {
                    if (key === prop) {
                        sum += item[key];
                    }
                }
            });
            return sum;
        }
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
hamburger.addStuffing(Hamburger.STUFFING_POTATO);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCal());
hamburger.addStuffing(Hamburger.STUFFING_POTATO);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCal());


