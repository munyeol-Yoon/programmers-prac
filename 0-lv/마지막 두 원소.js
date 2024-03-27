// 마지막에 있는 원소가 그 앞에 있는 원소보다 크면 -1 한 값을 배열에 넣는다.
// 마지막에 있는 원사가 그 앞에 있는 원소보다 크지 않으면 마지막에 있는 원소의 두배인 값을 배열에 넣는다.

function solution(num_list) {
  let result = [];
  const last = num_list[num_list.length - 1];
  const preLast = num_list[num_list.length - 2];

  if (last > preLast) {
    num_list.push(last - preLast);
  } else {
    num_list.push(last * 2);
  }
  result = num_list;

  return result;
}

console.log(solution([2, 1, 6]));
console.log(solution([5, 2, 1, 7, 5]));
