let profit,percent;
const btnReset = document.querySelector('.btn-gain-reset');
const bv = document.querySelector('.gain-buy-value');
const sv = document.querySelector('.gain-sell-value');
const ear = document.querySelector('.gain-earnings');
const pro = document.querySelector('.gain-percent');

function gainCalculate(){
    const buy = document.querySelector('#g-ba').value;
    const sell = document.querySelector('#g-sa').value;
    

    if (buy && sell){
        profit = sell - buy;
        percent = ((profit / buy) * 100).toFixed(2);

        document.querySelector('.gain-result-span').style.display = 'none';

        btnReset.style.display = 'block';
        bv.style.display = 'block';
        sv.style.display = 'block';
        ear.style.display = 'block';
        pro.style.display = 'block';

        buyValue = finalValue(buy);
        sellValue = finalValue(sell);
        bv.innerHTML = 'Buy Value: ' + '<strong>' + '₹' +  buyValue + '</strong>';
        sv.innerHTML = 'Sell Value: ' + '<strong>' + '₹' +  sellValue + '</strong>';
        ear.innerHTML = 'Total Earnings: ' + '<strong>' + '₹' +  profit + '</strong>';
        pro.innerHTML = 'Profit Percentage: ' + '<strong>' +  percent + '%' + '</strong>';
    }
    else{
        document.querySelector('.gain-result-span').innerHTML = 'Please Enter All Value';
        document.querySelector('.gain-result-span').style.display = 'block';
    }
}

function finalValue(x){
    x = x.toString();
    var lastThree = x.substring(x.length - 6);
    var otherNumbers = x.substring(0,x.length - 6);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
}

document.querySelector('.btn-gain-calculate').addEventListener('click',gainCalculate);
document.querySelector('.btn-gain-reset').addEventListener('click',()=>{
    document.querySelector('#g-ba').value = '';
    document.querySelector('#g-sa').value = '';
    btnReset.style.display = 'none';
    document.querySelector('.lumpsum-result-span').style.display = 'none';
    sv.style.display = 'none';
    bv.style.display = 'none';
    ear.style.display = 'none';
    pro.style.display = 'none';

});