def solution(array, height):
    answer = 0
    for i in array:
        # array 의 길이만큼 반복
        if height < i:
            # 주어진 키 height 보다 array 의 인덱스보다 크면
            answer+=1
            # answer 의 값을 1 추가해준다.
    return answer