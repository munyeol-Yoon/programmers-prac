def solution(n):
    pic = 6
    while pic % n != 0:
        pic += 6
    answer = pic / 6
    return answer