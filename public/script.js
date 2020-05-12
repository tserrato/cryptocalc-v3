let prices = [];

getData();
async function getData(){
    const response = await fetch('/data');
    const data = await response.json();
    prices = data;
    console.log(data);
}

setTimeout(function () {

function btc(){
    return prices[0]
}
function eth(){
    return prices[1]
}
function ltc(){
    return prices[2]
}
function xmr(){
    return prices[3]
}

console.log(btc());
console.log(eth());
console.log(ltc());
console.log(xmr());

    }, 500);