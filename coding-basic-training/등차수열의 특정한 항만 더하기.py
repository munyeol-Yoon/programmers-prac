def solution(a, d, included):
    answer = 0
    for i in included:
        if i:
            answer += a
        a += d
    
    return answer

'''
다른 사람의 풀이:

def solution(a, d, included):
    answer = 0
    for i in range(len(included)):
        answer += (a + d * i) * int(included[i])
    return answer
'''