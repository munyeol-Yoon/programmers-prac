# 자연수를 받고
# n 을 2진수로 변환한 것을 binum 변수에 저장
# while 문으로 반복하는데 자연수 n의 다음 숫자를 이진법으로 변환해 반복한다. (nextBiNum)
# 반복문 안에서 1이 몇 개 있는지 확인한다. count 메서드 사용
# binum 과 nextBiNum 의 1의 개수가 같으면 반복문을 탈출하고 nextBiNum 을 자연수로 변환해 리턴한다. 

def solution(n):
    binum = format(n, 'b')    
    while True:
        bunimCount = str(binum).count("1")
        n += 1
        bPlusNum = format(n, 'b')
        bPlusNumCount = str(bPlusNum).count("1")
        if bunimCount == bPlusNumCount :            
            break

    return n

# print(solution(78) )# 1000000