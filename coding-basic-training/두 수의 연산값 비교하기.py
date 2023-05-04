def solution(a, b):
    compare = 2 * a * b
    combine = str(a) + str(b)
    return max(int(combine), compare)