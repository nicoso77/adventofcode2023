//let arr = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];
let suma = 0;
for(let i = 0; i < arr.length; i++) {
  const onlyNumbers = arr[i].replace(/[^0-9]+/g, "");
  let primnum = onlyNumbers[0];
  let lastnum = onlyNumbers[onlyNumbers.length -1];
  suma += parseInt(primnum + lastnum);

}

document.getElementById('tst').innerHTML = suma;