let prices = [];

getData();
async function getData() {
    const response = await fetch('/data');
    const data = await response.json();
    prices = data;
}

setTimeout(function () {

    function btc() {
        return prices[0]
    }
    function eth() {
        return prices[1]
    }
    function ltc() {
        return prices[2]
    }
    function xmr() {
        return prices[3]
    }

    let btcAMT = document.getElementById('Bitcoin');
    let ethAMT = document.getElementById('Ethereum')
    let ltcAMT = document.getElementById('Litecoin')
    let xmrAMT = document.getElementById('Monero')

    function listen() {
        btcAMT.addEventListener("keyup", bitcoinTotal)
        ethAMT.addEventListener("keyup", ethereumTotal)
        ltcAMT.addEventListener("keyup", litecoinTotal)
        xmrAMT.addEventListener("keyup", moneroTotal)
    }

    let bPrice;
    let ePrice;
    let lPrice;
    let xPrice;

    function bitcoinTotal() {
        let total = btcAMT.value * btc();
        totalPrice();
        return total;
    }
    function ethereumTotal() {
        let total = ethAMT.value * btc();
        totalPrice();
        return total;
    }
    function litecoinTotal() {
        let total = ltcAMT.value * btc();
        totalPrice();
        return total;
    }
    function moneroTotal() {
        let total = xmrAMT.value * btc();
        totalPrice();
        return total;
    }

    function totalPrice() {
        let total = ;
        console.log(total);
    }

    

    listen();


}, 500);





