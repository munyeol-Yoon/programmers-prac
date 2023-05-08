def solution(n):
    answer = 0
    if n % 2 == 0:
        for i in range(1, n+1):
            if(i % 2 != 0):
                continue
            answer += i**2
    if n % 2 == 1:
        for i in range(1, n+1):
            if(i % 2 == 0):
                continue
            answer += i
    
    return answer

'''
너무 어렵게 풀었던거같다 
풀면서도 한줄 if 와 한줄 for 를 사용할 수 있었을거 같았는데 숙련도가 부족했었다.
다른사람의 코드 : 
def solution(n):
    return sum(x ** (2 - x % 2) for x in range(n + 1) if n % 2 == x % 2)

다른사람의 코드 : 
def solution(n):
    if n%2:
        return sum(range(1,n+1,2))
    return sum([i*i for i in range(2,n+1,2)])

'''