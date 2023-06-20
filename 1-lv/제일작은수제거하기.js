//hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~hi~

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length === 0 ? [-1] : arr;
}

console.log(solution([-1, 4, 5, 1, 2]));
console.log(solution([10]));
