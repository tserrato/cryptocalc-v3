let prices = [];
let cPrice = [];

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
    let ethAMT = document.getElementById('Ethereum');
    let ltcAMT = document.getElementById('Litecoin');
    let xmrAMT = document.getElementById('Monero');
    let calcButton = document.getElementById('submit');

    function listen() {
        btcAMT.addEventListener("keyup", bitcoinTotal);
        ethAMT.addEventListener("keyup", ethereumTotal);
        ltcAMT.addEventListener("keyup", litecoinTotal);
        xmrAMT.addEventListener("keyup", moneroTotal);
        calcButton.addEventListener("click",total);

    }

    let bPrice;
    let ePrice;
    let lPrice;
    let xPrice;

    function total(){
        let sum = bPrice + ePrice + lPrice + xPrice;
        document.getElementById("calcTotal").innerHTML = sum;
        console.log(sum);
    }

    function bitcoinTotal() {
        let total = btcAMT.value * btc();
        bPrice = total;
        document.getElementById("inputone").innerHTML = total;
    
        return total;
    }
    function ethereumTotal() {
        let total = ethAMT.value * eth();
        ePrice = total;
        document.getElementById("inputtwo").innerHTML = total;
    
        return total;
    }
    function litecoinTotal() {
        let total = ltcAMT.value * ltc();
        lPrice = total;
        document.getElementById("inputthree").innerHTML = total;
    
        return total;
    }
    function moneroTotal() {
        let total = xmrAMT.value * xmr();
        xPrice = total;
        document.getElementById("inputfour").innerHTML = total;
    
        return total;
    }
    bitcoinTotal();
    ethereumTotal();
    litecoinTotal();
    moneroTotal();
    listen();


}, 500);





