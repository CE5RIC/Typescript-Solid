interface DiscountType {
    applyDiscount(price:number): number;
    showCalculation(price:number): string;
}


class VariableDiscount implements DiscountType {
    /*  private _discountType: string = 'variable';*/
    private readonly _value: number;

    constructor(value: number= 0) {
        this._value = value;
    }

    applyDiscount(price: number): number {
        return (price - (price * this._value / 100));

    }

    showCalculation(price: number): string {
        return price + " € -  " + this._value + "%";
    }

}

class FixedDiscount implements DiscountType {
    /*  private _discountType: string = 'fixed';*/
    private readonly _value: number;

    constructor(value: number= 0) {
        this._value = value;
    }

    applyDiscount(price: number): number {
        return Math.max(0, price - this._value);
    }

    showCalculation(price: number): string {
        return price + "€ -  " + this._value + "€ (min 0 €)";
    }
}
class NoDiscount implements DiscountType {
    /*  private _discountType: string = 'fixed';*/
    private _value: number;

    constructor(value: number= 0) {
        this._value = value;
    }

    applyDiscount(price: number): number {
        return price
    }

    showCalculation(price: number): string {
        return'No discount'
    }
}


class Product {
    private readonly _name: string;
    private readonly _price: number;
    private readonly _discount: DiscountType;

    constructor(name: string, price: number, discount: DiscountType) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }

    get name(): string {
        return this._name;
    }

    get discount(): DiscountType {
        return this._discount;
    }

    get originalPrice(): number {
        return this._price;
    }

    calculatePrice(): number {
        return this._discount.applyDiscount(this._price);
    }

    showCalculation(): string {
        return this._discount.showCalculation(this._price);
    }
}

class shoppingBasket {
    private _products: Product[] = [];

    get products(): Product[] {
        return this._products;
    }

    addProduct(product: Product) {
        this._products.push(product);
    }
}

let cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount(10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount()));


const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);

    tableElement.appendChild(tr);
});