import math
def solution(numer1, denom1, numer2, denom2):
    a = (denom1 * numer2) + (denom2 * numer1) # 분자
    b = denom1 * denom2 # 분모
    
    c = math.gcd(a, b)
    
    answer = [a / c, b / c]
    
    return answer