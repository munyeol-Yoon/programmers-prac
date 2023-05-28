def solution(s):
    length = len(s)
    zero_count = 0 # 0 삭제 개수
    count = 0 # 회전개수
    while s != '1':
        zero = s.count('0') # 0의 개수
        zero_count += zero
        
        s = s.replace('0', '') # 0 빼기
        length = len(s)
        
        s = str(format(length, 'b')) # 이진수로 변환
        count += 1 # 회전수 카운트 증가

    answer = [count, zero_count]
    return answer

# 같이 스터디했던 팀원들의 코드가 인상깊어 남긴다.
# 영우님 ===================================
# def solution(s):
#     answer = True
#     leftCount = 0
#     rightCount = 0

#     for i in s:
#         if i == '(':
#             leftCount += 1
#         else:
#             rightCount +=1
#         if(leftCount < rightCount) :
#             answer = False
#             break

#     if(leftCount != rightCount):
#         answer = False

#     return answer

# 민승님 ============================
# def solution(s):
#     stack = []

#     for 괄호 in s:
#         if 괄호 == "(":
#             stack.append(괄호)
#         else:
#             if not stack:
#                 return False
#             stack.pop()

#     return bool(not stack)