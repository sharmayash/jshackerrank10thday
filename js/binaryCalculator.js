let btn0 = document.getElementById('btn0'),
    btn1 = document.getElementById('btn1'),
    btnClr = document.getElementById('btnClr'),
    btnEql = document.getElementById('btnEql'),
    btnSum = document.getElementById('btnSum'),
    btnSub = document.getElementById('btnSub'),
    btnMul = document.getElementById('btnMul'),
    btnDiv = document.getElementById('btnDiv'),
    val0 = btn0.innerHTML,
    val1 = btn1.innerHTML,
    n = document.getElementById('res')


btn0.onclick = () => {
    n.innerHTML += '0';
}

btn1.onclick = () => {
    n.innerHTML += '1';
}

btnClr.onclick = () => {
    n.innerHTML = ''
}

btnEql.onclick = () => {
    let temp = n.innerHTML;
    let tempArr = temp.split(' ');
    let x = tempArr[0];
    x = parseInt(x, 2);
    let ops = tempArr[1];
    let y = tempArr[2];
    y = parseInt(y, 2);
    n.innerHTML = Math.floor(eval(x+ops+y).toString(2));
}

btnSum.addEventListener('click', () => {
    n.innerHTML += ' + ';
}, {once: true}); 

btnSub.addEventListener('click', () => {
    n.innerHTML += ' - ';
}, {once: true});

btnMul.addEventListener('click', () => {
    n.innerHTML += ' * ';
}, {once: true});

btnDiv.addEventListener('click', () => {
    n.innerHTML += ' / ';
}, {once: true});
