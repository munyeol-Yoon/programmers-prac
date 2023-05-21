from collections import Counter

def solution(array):
    counter = Counter(array)
    bin = counter.most_common(2) # 튜플로 저장되어있슴
    answer = bin[0][0] # 가장 많이나온 친구답에 저장
    if len(bin) == 1:
        return answer
    if bin[0][1] == bin[1][1]:
        answer = -1
    return answer
        
