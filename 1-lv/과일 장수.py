# 과일 장수
# ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ

# 사과들의 점수 정렬
# while문을 사용해서 score.len() > m:
# for문에서 정렬된 score[-1]부터 m만큼 pop
# 마지막으로 pop한 값 * m 한 값을 answer에 더하기

# 

def solution(k, m, score):
    answer = 0
    plusValue = 0 # answer에 더해줄 값
    score.sort() # 정렬
    
    while len(score) >= m:
        for i in range(m, 0, -1):           
            plusValue = score.pop()
        answer += plusValue * m
    return answer

print(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))

# k 최상품 1 이라면 최하품임
# 한 상자에 사과를 m 개
# p * m 사과 한상자 가격


#--------------------------------------------------------
# 실패입니다... 리펙토링 ㅠㅠ

# def solution(k, m, score):
#     answer = 0
#     plusValue = 0
#     score.sort(reverse=True)
#     # O(1), O(n)
#     while len(score) >= m:
#         for i in range(m):           
#             plusValue = score.pop(0)        
#         answer += plusValue * m
#     return answer

# print(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))