# 귤 고르기

# k 는 한 상자에 담으려는 귤의 개수

# 4, [1, 3, 2, 5, 4, 5, 2, 3]           2
# [3, 2, 5, 5, 2, 3]
# [2, 2, 3, 3, 5, 5]

from collections import Counter

def solution(k, tangerine):
    answer = 0
    orange = 0

    cnter = Counter(tangerine).most_common()
    
    for i in cnter:
        orange = orange + i[1]
        answer = answer + 1
        if k <= orange:
            break
    
    return answer

print(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]))

# 민승님 코드 =========================================
# from collections import Counter
# def solution(k, tangerine):
#     answer = 0
#     arr = Counter(tangerine).most_common()
#     for val , idx in arr:
#         if k <= 0: break
#         k -= idx
#         answer += 1
#     return answer