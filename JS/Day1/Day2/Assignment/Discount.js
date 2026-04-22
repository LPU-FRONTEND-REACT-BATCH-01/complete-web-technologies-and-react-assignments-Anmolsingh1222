
console.log("JS is running");

function Price() {
    let price = Number(prompt("Enter the price :"));

    if (price >= 6000) {
        console.log("You got 25% discount. Final price: " + (price - price * 0.25));
    }
    else if (price > 2000) {
        console.log("You got 20% discount. Final price: " + (price - price * 0.2));
    }
    else {
        console.log("No discount. Final price: " + price);
    }

    console.log(price);
}

Price();