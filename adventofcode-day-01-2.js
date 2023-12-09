let arrnumsc = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let arrnumsn = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let suma = 0;

let posicara;
let posicnum;
let posinum = [];
let posinumf = [];
let posinum2;
let num;
let suma2 = '';
let suma3 = '';
let k;
let l;
let lastind;
for(let i = 0; i < arr.length; i++) {  posinum = [];
    posinumf = [];
    
    for(let j = 0; j < arrnumsc.length; j++) {
      posicara = arr[i].indexOf(arrnumsc[j]);
      posicnum = arr[i].indexOf(arrnumsn[j]);
      if (posicara >= 0) posinum[posicara] = arrnumsn[j];
      if (posicnum >= 0) posinum[posicnum] = arrnumsn[j];
      
      posicara = arr[i].lastIndexOf(arrnumsc[j]);
      posicnum = arr[i].lastIndexOf(arrnumsn[j]);
      if (posicara >= 0) posinumf[posicara] = arrnumsn[j];
      if (posicnum >= 0) posinumf[posicnum] = arrnumsn[j];
    } 
  
    k = 0;
    posinum.forEach(function(posic) {
        posinum[k] = posic;
        k++;
    }); /* */
  
    l = 0;
    posinumf.forEach(function(posicf) {
        posinumf[l] = posicf;
        l++;
    });
  
    lastind = posinumf.length-1;
    //suma2 += '--- ' + arr[i] + ': ' + posinum[0] + ' ' + posinumf[lastind] + ' - ' + lastind + '<br>';
    suma += parseInt(posinum[0] + '' + posinumf[lastind]);
}

document.getElementById('tst').innerHTML = suma;