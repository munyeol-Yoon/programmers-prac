// 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
/*조건문을 사용합니다. 조건은 글자수를 2로 나누어 나온 나머지가 0이 아닌 경우 글자수를 2로 나눈 몫을 정수(소수점 버림)로 글자 를 추출합니다.
변수를 선언하여 
 글자수를 2로 나누어 나온 나머지가 0인 경우 글자수를 2로 나눈 몫과 그 몫에 1을 더한 값을 글자수로 추출 합니다.*/

function solution(s) {
  var answer = "";
  if (s.length % 2 == 0) {
    let lenNum = Math.floor(s.length / 2);
    answer = s[lenNum - 1] + s[lenNum];
  } else {
    let lenNum = Math.floor(s.length / 2);
    answer = s[lenNum];
  }
  return answer;
}

console.log(solution("abcde"));
