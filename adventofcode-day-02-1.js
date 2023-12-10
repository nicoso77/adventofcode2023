// let arr1 = ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', 'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'];

let numc = [];
numc['red'] = 12;
numc['green'] = 13;
numc['blue'] = 14;
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arrv = [];
let ocal;
let test = '';
let cubs = '';
let suma = 0;
let arrx = [];
for(let i = 0; i < arr1.length; i++) {
  ocal = 0;
  arr2 = arr1[i].split(': ');
  arr3 = arr2[1].split('; ');
  for(let j = 0; j < arr3.length; j++) {
    arr4 = arr3[j].split(', ');
    for(let k = 0; k < arr4.length; k++) {
      arrv = arr4[k].split(' ');
      if(parseInt(arrv[0]) > parseInt(numc[arrv[1]])) ocal += 1;
    }
  }
  if(ocal == 0) {
    arrx = arr2[0].split(' ');
    suma += parseInt(arrx[1]);
  }
}

document.getElementById('tst').innerHTML = suma;