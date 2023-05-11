from collections import Counter

def solution(a, b, c):
    answer = 0
    
    list = [a, b, c]
    
    counter = Counter(list)
    
    if len(counter) == 3:
        answer = a + b + c
    if len(counter) == 2:
        answer = (a + b + c) * ((a**2) + (b**2) + (c**2))
    if len(counter) == 1:
        answer = (a + b + c) * ((a**2) + (b**2) + (c**2)) * ((a**3) + (b**3) + (c**3))
    return answer

# 비슷한 느낌이었는데 다른분처럼 외부라이브러리를 쓰지 않고 set 을 활용한게 인상깊었음
'''
다른사람의 풀이 :

def solution(a, b, c):
    check=len(set([a,b,c]))
    if check==1:
        return 3*a*3*(a**2)*3*(a**3)
    elif check==2:
        return (a+b+c)*(a**2+b**2+c**2)
    else:
        return (a+b+c)

'''