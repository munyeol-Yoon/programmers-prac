## 가장 가까운 글자
## ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅍㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㄴㅇㄹㅇㅎㅇㅎㅇㅎㅇㅎㅇ
# 1. dict 라는 이름으로 딕셔너리를 선언한다.
# 2. s 의 길이 만큼 for 루프를 돈다.
# 3. 만약 s 의 i 번째 글자가 딕셔너리에 포함되어 있다면, i 와 해당 딕셔너리의 값을 빼주어 몇번째 인덱스인지 answer에 저장한다.
# 4. 아닌 경우 앞서 나온 글자가 아니기 때문에 answer에 -1 을 반환한다.
# 5. 루프 마지막에 딕셔너리에 해당 글자의 키에 최신화된 인덱스의 번호인 i 를 넣어준다.
# 6. 반복문이 종료된후 answer 를 리턴해준다.

# 추가 : 딕셔너리 활용에 익숙해질것


def solution(s):
    answer = []
    s_dict = {}
    for i in range(len(s)):
        if s[i] in s_dict:
            answer.append(i - s_dict[s[i]])
        else:
            answer.append(-1)
        s_dict[s[i]] = i
    return answer

print(solution("banana"))

        #이미 원소가 나왔다.
        # i : 현제 위치
        # s_dict[i] = 원소가 가장 최근에 나온 위치
        # if(s[i] in s_dict):
        #     answer.append(i - s_dict[i])
        # else: 
        #     answer.append(-1)