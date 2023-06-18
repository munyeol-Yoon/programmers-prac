# 두 개 뽑아서 더하기
# 주어진 리스트 만큼 돌면서 다음 과정을 수행한다. -> 1
# 그 리스트에 엔덱스 보다 큰 인덱스부터 끝까지 돌면서 다음 과정을 수행한다. -> 2
# 1번째와 2번째의 원소들을 더한 값을 answer에 담는다.
# 하지만 만약 1번째의 값과 2번째의 값의 합이 이미 존재한다면 answer에 해당 값을 넣지 않는다.
# 이중 반복문이 끝나고 나서 answer를 정렬한다.
# answer를 반환한다.


def solution(numbers):
    answer = []
    for i in range(len(numbers)):
        for j in range(i+1,len(numbers)):
            sumVal = numbers[i] + numbers[j]
            
            if sumVal not in answer:
                answer.append(sumVal)

    answer.sort()

    return answer

print(solution([2, 1, 3, 4, 1]))
# [2, 3, 4, 5, 6, 7]
