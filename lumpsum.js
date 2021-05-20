let lumpsumValue,earnings,invested;

function lumpsumCalculate(){
    const ia = document.querySelector('#l-ia').value;
    const rate = document.querySelector('#l-return').value;
    const tenure = document.querySelector('#l-tenure').value;
    if(ia && rate && tenure){
        lumpsumValue = ia
        for(i = 0;i< tenure; i++){
            lumpsumValue = parseFloat(lumpsumValue) + parseFloat(lumpsumValue) * rate * 0.01;
        }
        document.querySelector('.lumpsum-result-span').style.display = 'none';
        earnings = lumpsumValue - ia;
        earnings = finalValue(earnings.toFixed(2));
        lumpsumValue = finalValue(lumpsumValue.toFixed(2));
        document.querySelector('.btn-lumpsum-reset').style.display = 'block';
        document.querySelector('.lumpsum-value').style.display = 'block';
        document.querySelector('.lumpsum-earnings').style.display = 'block';
        document.querySelector('.lumpsum-invested').style.display = 'block';
        document.querySelector('.lumpsum-value').innerHTML =   'Your Corpus Value: ' + '<strong>' + '₹' +  lumpsumValue + '</strong>';
        document.querySelector('.lumpsum-earnings').innerHTML = 'Total Earnings: ' + '<strong>'+ '₹' + earnings + '</strong>';
        document.querySelector('.lumpsum-invested').innerHTML = 'Total Deposited Amount:' + '<strong>'+ '₹' +  ia + '</strong>';
    }
    else{
        document.querySelector('.lumpsum-result-span').innerHTML = 'Please Enter All Value';
        document.querySelector('.lumpsum-result-span').style.display = 'block';
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
document.querySelector('.btn-lumpsum-calculate').addEventListener('click',lumpsumCalculate);
document.querySelector('.btn-lumpsum-reset').addEventListener('click',()=>{
    document.querySelector('#l-ia').value = '';
    document.querySelector('#l-return').value = '';
    document.querySelector('#l-tenure').value = '';
    document.querySelector('.btn-lumpsum-reset').style.display = 'none';
    document.querySelector('.lumpsum-result-span').style.display = 'none';
    document.querySelector('.lumpsum-value').style.display = 'none';
    document.querySelector('.lumpsum-earnings').style.display = 'none';
    document.querySelector('.lumpsum-invested').style.display = 'none';

});