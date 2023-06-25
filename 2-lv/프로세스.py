from collections import deque

def solution(priorities, location):
    que = deque(priorities)
    answer = 0

    while True:
        maxVal = max(que) # 가장 높은 우선순위
        front = que.popleft()  # 맨 앞자리
        location = location - 1 # pop 되었기때문에 location 을 빼준다.
        print(que)
        if front != maxVal: # 우선순위가 다른경우 
            que.append(front) # 빼주었던 친구를 다시 넣어준다.
            if location < 0: # location 의 값이 0 보다 적어진 경우는
                location = len(que) - 1 # 다시 반복할 수 있게 que 의 길이 만큼 추가해준다.
        else: # 우선순위가 맞는경우
            answer += 1 # answer 에 1을 증가시키고
            if location < 0: # location 의 값이 0보다 적어지면 종료한다.
                return answer

    


print(solution([2, 1, 3, 2], 2))
print(solution([1, 1, 9, 1, 1, 1], 0))