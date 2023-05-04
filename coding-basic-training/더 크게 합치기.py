def solution(a, b):
    answer_a = str(a) + str(b)
    answer_b = str(b) + str(a)
    return int(answer_a) if int(answer_a) >= int(answer_b) else int(answer_b) 