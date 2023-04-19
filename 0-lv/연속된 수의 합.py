def solution(num, total):
    answer = []

    avg = total // num
    # avg 변수에 평균값을 넣어준다. 이 평균값은 리스트의 중간숫자이다.
    
    for i in range(0, num):
        answer.append(i)
    # 리스트를 0 부터 인덱스인 num 까지 넣어준다.
    
    end_loop = 0
    # while 문을 종료시키기 위한 end_loop 변수 선언
    # while 문은 end_loop 변수가 1 이 되면 루프를 종료한다.
    while end_loop != 1:
        sumList = sum(answer)
        # answer 의 모든 리스트 값을 더해 sumList 에 저장한다.
        for i in range(0, num):
            # 인덱스의 길이만큼 for문을 반복한다.
            if sumList < total:
                answer[i] += 1
                # answer 의 합계보다 문제에서 준 total 을 비교해 total 값이 크면 
                # answer 의 값들을 1 더해준다.
            if sumList > total:
                answer[i] -= 1
                # answer 의 합계보다 문제에서 준 total 을 비교해 total 값이 크면 
                # answer 의 값들을 1 빼준다.
            if sumList == total:
                end_loop = 1
                break
                # answer 의 합계와 문제에서 준 total 이 같으면 while 문을 종료한다.
        
    return answer