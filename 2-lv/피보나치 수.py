# F(n) = F(n-1) + F(n-2)
# n번째 피보나치 수를 1234567
# F(0) = 0, F(1) = 1
# 길이가 n+1인 DP 배열을 만든다.
# DP 모든 배열에 -1 값을 초기화한다.
# 그 후 DP[0] = 0, DP[1] = 1 값을 넣는다.
# for문을 돌려서 n부터 0까지 반복
# 반복문 안에서 DP[i]가 -1이 아닌지 확인
# DP[i]이 -1일 경우 DP[i] = solution(i-1) + solution(i-2) 실행
# DP[i]가 -1이 아닐 경우에는 
# 왔나?ㅋㅋㅋ 왔냐?ㅋㅋㅋ
 

def solution(n):
    DP = [-1] * (n+ 1)    
    DP[0] = 0
    DP[1] = 1    
    for i in range(2, n+1):
        DP[i] = DP[i-1] + DP[i-2]
    return DP[n] % 1234567
# test
print(solution(3))


'''
def solution(n):
    DP = [0, 1]
    for i in range(2 , n + 1):
        DP.append((DP[i - 1] + DP[i - 2]) % 1234567)
    return DP[-1]
'''