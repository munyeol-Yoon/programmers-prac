import math
def solution(money):
    coffee = 5500
    return [math.floor(money/coffee), round(money%coffee)]