function stepUpCalculate(){
    let stepUpValue = 0, earnings, invested = 0;
    let ia = document.querySelector('#su-ia').value;
    const rate = document.querySelector('#su-return').value;
    const tenure = document.querySelector('#su-tenure').value;
    const increment = document.querySelector('#su-incr').value;
    const n = 12;
    const j = rate/100/12;
    if(ia && rate && tenure &&increment){
        for(i = 0;i < tenure; i++){
            stepUpValue = parseFloat(stepUpValue) + parseFloat(ia) * [Math.pow(1 + parseFloat(j),parseFloat(n)) - 1] * (1 + parseFloat(j))/parseFloat(j) + parseFloat(stepUpValue) * parseFloat(rate) * 0.01;
            invested = parseFloat(invested) + parseFloat(ia);
            ia = parseFloat(ia) + parseFloat(ia) * increment * 0.01;
        }
        invested = 12 * invested;
        earnings = stepUpValue - invested;
        invested = finalValue(invested.toFixed(2));
        earnings = finalValue(earnings.toFixed(2));
        stepUpValue = finalValue(stepUpValue.toFixed(2));
        document.querySelector('.btn-step-up-reset').style.display = 'block';
        document.querySelector('.step-up-value').style.display = 'block';
        document.querySelector('.step-up-earnings').style.display = 'block';
        document.querySelector('.step-up-invested').style.display = 'block';
        document.querySelector('.step-up-result-span').style.display = 'none';
        document.querySelector('.step-up-value').innerHTML =   'Your Corpus Value: ' + '<strong>' + '₹ ' +  stepUpValue + '</strong>';
        document.querySelector('.step-up-earnings').innerHTML = 'Total Earnings: ' + '<strong>'+ '₹ ' + earnings + '</strong>';
        document.querySelector('.step-up-invested').innerHTML = 'Total Deposited Amount: ' + '<strong>'+ '₹ ' + invested + '</strong>';
        }
        else{
            document.querySelector('.step-up-result-span').innerHTML = 'Please Enter All Value';
            document.querySelector('.step-up-result-span').style.display = 'block';
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

document.querySelector('.btn-step-up-calculate').addEventListener('click', stepUpCalculate);

document.querySelector('.btn-step-up-reset').addEventListener('click',() => {
    document.querySelector('#su-ia').value = '';
    document.querySelector('#su-return').value = '';
    document.querySelector('#su-tenure').value = '';
    document.querySelector('.btn-step-up-reset').style.display = 'none';
    document.querySelector('.step-up-result-span').style.display = 'none';
    document.querySelector('.step-up-value').style.display = 'none';
    document.querySelector('.step-up-earnings').style.display = 'none';
    document.querySelector('.step-up-invested').style.display = 'none';
});