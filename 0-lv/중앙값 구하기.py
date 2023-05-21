def solution(array):
    sortArray = sorted(array)
    l = len(array) / 2
    answer = sortArray[int(l)]
    return answer