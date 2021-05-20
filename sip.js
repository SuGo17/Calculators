let sipValue,earnings,invested;

function sipCalculate(){
    let ia = document.querySelector('#s-ia').value;
    const rate = document.querySelector('#s-return').value;
    const tenure = document.querySelector('#s-tenure').value;
    const freq = document.querySelector('#s-frequency').value;
    const i = rate/100/12;
    const n = 12 * tenure;
    if(ia && rate && tenure){
        sipValue = 0;
        if(freq == 'Yearly'){
            sipValue = parseFloat(ia) * [Math.pow(1 + parseFloat(rate/100),parseFloat(tenure)) - 1] * (1 + parseFloat(rate/100))/parseFloat(rate/100);
        }
        else {
            sipValue = parseFloat(ia) * [Math.pow(1 + parseFloat(i),parseFloat(n)) - 1] * (1 + parseFloat(i))/parseFloat(i);
            ia = 12 * ia;
        }
        let deposited = tenure * ia;
        earnings = sipValue - deposited;
        deposited = finalValue(deposited.toFixed(2));
        earnings = finalValue(earnings.toFixed(2));
        sipValue = finalValue(sipValue.toFixed(2));
        document.querySelector('.btn-sip-reset').style.display = 'block';
        document.querySelector('.sip-value').style.display = 'block';
        document.querySelector('.sip-earnings').style.display = 'block';
        document.querySelector('.sip-invested').style.display = 'block';
        document.querySelector('.sip-result-span').style.display = 'none';
        document.querySelector('.sip-value').innerHTML =   'Your Corpus Value: ' + '<strong>' + '₹' +  sipValue + '</strong>';
        document.querySelector('.sip-earnings').innerHTML = 'Total Earnings: ' + '<strong>'+ '₹' + earnings + '</strong>';
        document.querySelector('.sip-invested').innerHTML = 'Total Deposited Amount: ' + '<strong>'+ '₹' + deposited + '</strong>';
    }
    else{
        document.querySelector('.sip-result-span').innerHTML = 'Please Enter All Value';
        document.querySelector('.sip-result-span').style.display = 'block';
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
document.querySelector('.btn-sip-calculate').addEventListener('click', sipCalculate);

document.querySelector('.btn-sip-reset').addEventListener('click',() => {
    document.querySelector('#s-ia').value = '';
    document.querySelector('#s-return').value = '';
    document.querySelector('#s-tenure').value = '';
    document.querySelector('.btn-sip-reset').style.display = 'none';
    document.querySelector('.sip-result-span').style.display = 'none';
    document.querySelector('.sip-value').style.display = 'none';
    document.querySelector('.sip-earnings').style.display = 'none';
    document.querySelector('.sip-invested').style.display = 'none';
});