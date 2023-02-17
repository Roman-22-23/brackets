module.exports = function check(str, bracketsConfig) {
  let arrCount = Array.from({ length: bracketsConfig.length }, (_, idx) => 0);
  strOchered = " ";
  return checker(str, bracketsConfig, arrCount);
}

let strOchered;
let otkrytajaSkobka;
let SkobkiOdinakovyje;

function checker(str, bracketsConfig, arrCount) {
  for(let n of arrCount) {
    if (n < 0) return false;
  }

  for( let c of str) {
    for (let i=0;i<arrCount.length;i++) {
      otkrytajaSkobka = (strOchered.substring(strOchered.length-1) === i.toString());
      SkobkiOdinakovyje = (bracketsConfig[i][0] === bracketsConfig[i][1]);

      if((c==bracketsConfig[i][0] && !SkobkiOdinakovyje) || (c==bracketsConfig[i][0] && SkobkiOdinakovyje && !otkrytajaSkobka)) {
        arrCount[i]++;
        strOchered+=i.toString();
        return checker(str.substring(1), bracketsConfig, arrCount);
      } else if(c==bracketsConfig[i][1]) {
        arrCount[i]--;
        if(strOchered.substring(strOchered.length-1) == i.toString()) {
          strOchered = strOchered.substring(0,strOchered.length-1);
        }
        else {
          return false;
        }
        return checker(str.substring(1), bracketsConfig, arrCount);
      }
    }
  }
  for(let n of arrCount) {
    if (n != 0) return false;
  }
  return true;
}
