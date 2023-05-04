def solution(str1, str2):
    answer = ''
    j = 0
    for i in str1:
        answer += i
        answer += str2[j]
        j += 1
    return answer