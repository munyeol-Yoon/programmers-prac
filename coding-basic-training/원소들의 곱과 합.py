def solution(num_list):
    numSum = sum(num_list)**2
    numMul = 1
    for i in num_list:
        numMul *= i
    
    return 1 if numSum > numMul else 0

'''
'''