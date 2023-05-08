def solution(ineq, eq, n, m):
    answer = 0
    if ineq == "<" and (eq == "=" or eq == "!"):
        if eq == "!" and n < m:
            answer = 1
        if n <= m and eq != "!":
            answer = 1
    if ineq == ">" and (eq == "=" or eq == "!"):
        if eq == "!" and n > m:
            answer = 1
        if n >= m and eq != "!":
            answer = 1
        
    return answer

'''
잘못된거같으면서도 계속 코드를 써내려간 나를 반성하게되는 코드이다.
최소의 if 만으로도 풀 수 있었어야했는데 그러지 못했다. 아쉬움이 남음 ㅠ
다른사람의 코드 :
def solution(ineq, eq, n, m):
    return int(eval(str(n)+ineq+eq.replace('!', '')+str(m)))

다른사람의 코드 : 
def solution(ineq, eq, n, m):
    answer = 0
    if n > m and ineq ==">":
        answer = 1
    elif n < m and ineq == "<":
        answer = 1
    elif n == m and eq == "=":
        answer = 1

    return answer
'''