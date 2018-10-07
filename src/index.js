module.exports = function count(s, pairs) {

let answer = 1;
let array = [];

for (let i = 0; i < pairs.length; i++) {
   answer *= pairs[i][0] ** pairs[i][1];
 }
console.log(answer);
if (answer > 200000) {
  return 0;
}

for (let j = 0; j < s.length; j++) {
  for (let k = 0; k <= answer; k++) {
    let secondCondition = s.length > 1 ? k != answer : 1;
    let firstCondition = gcd(k + j, answer);
    switch (s[j]) {
      case '0':
        firstCondition !== 1 && secondCondition ? arrayPush(k) : '';
      break;
      case '1':
        firstCondition === 1 && secondCondition ? arrayPush(k) : '';
        break;
    }
  }
}

function gcd(first, second) {
  return second === 0 ? first : gcd(second, first % second);
}

function arrayPush(k) {
  return k === 0 ? '' : array.push(k);
}

array = array.filter(elem => array.indexOf(elem) == array.lastIndexOf(elem));

  return array.length % 1000000007;
}
