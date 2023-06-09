def solution(code):
    mode = 0
    ret = ''
    for idx in range(len(code)):
        if code[idx] == '1':
            if mode == 0: 
                mode = 1
            else: 
                mode = 0
        else:
            if mode == 0:
                if idx % 2 == 0:
                    ret += code[idx]
            else:    
                if idx % 2 == 1:
                    ret += code[idx]
   
    if not ret:return 'EMPTY'
    
    return ret

'''
다은사람의 풀이 : 
def solution(code):
    answer = ''

    mode = 0
    for i in range(len(code)):
        if code[i] == '1':
            mode ^= 1
        else:
            if i % 2 == mode:
                answer += code[i]

    return answer if answer else 'EMPTY'

'''