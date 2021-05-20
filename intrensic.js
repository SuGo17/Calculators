//------------------------ Intrensic Value Calculator ------------------------------------------//

let epsNext, intrensicValue;

function intrensicCalculate(){
    const eps = document.querySelector('#i-eps').value;
    const growth = document.querySelector('#i-growth').value;
    const rate = document.querySelector('#i-return').value;
    const pe = document.querySelector('#i-pe').value;
    const mos = document.querySelector('#i-mos').value;
    const tenure = document.querySelector('#i-tenure').value;
    epsNext = eps;
    document.querySelector('.intrensic-result').style.display = 'block';
    if(eps && growth && rate && pe && mos && tenure){
        for(i = 0; i < tenure; i++){
            epsNext = parseFloat(epsNext) + parseFloat(epsNext) * growth * 0.01;
        }
        intrensicValue = epsNext * pe;
        for(j = 0; j < tenure - 1; j++){
            intrensicValue -= intrensicValue * rate * 0.01;
        }
        intrensicValue = intrensicValue * (100 - mos) * 0.01;
        document.querySelector('.intrensic-value').textContent = '₹ ' + parseInt(intrensicValue);
        document.querySelector('.btn-intrensic-reset').style.display = 'block';
        document.querySelector('.intrensic-label').style.display = 'block';
    }
    else
    {
        document.querySelector('.intrensic-value').textContent = 'Please Enter All The Values Correctly';
    }
}
document.querySelector('.btn-intrensic-calculate').addEventListener('click', intrensicCalculate);
document.querySelector('.btn-intrensic-reset').addEventListener('click', () => {
        document.querySelector('.btn-intrensic-reset').style.display = 'none';
        document.querySelector('#i-eps').value = '';
        document.querySelector('#i-growth').value = '';
        document.querySelector('#i-return').value = '';
        document.querySelector('#i-pe').value = '';
        document.querySelector('#i-mos').value = '';
        document.querySelector('#i-tenure').value = '';
        document.querySelector('.intrensic-value').textContent = '';
        document.querySelector('.intrensic-result').style.display = 'none';
        document.querySelector('.intrensic-label').style.display = 'none';
});

//------------------------ Lumpsum Calculator ------------------------------------------//
