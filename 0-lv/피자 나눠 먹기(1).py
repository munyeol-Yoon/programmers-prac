import math 
def solution(n):
    # 사람수 n 피자조각 7 일때 모든 사람이 피자를 한조각먹을수 있는 판수
    pizza = 7
    answer = math.ceil(n/pizza)
    
    return answer